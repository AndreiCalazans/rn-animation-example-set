//  @flow
import * as React from 'react';
import styled from 'styled-components/native';
import { Animated, Dimensions, View, Text } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProgressMessage = styled(Animated.createAnimatedComponent(Text))`
  position: absolute;
  font-family: HelveticaNeue-Bold;
  font-size: 18px;
  color: #2b2b2b;
  letter-spacing: -0.23px;
  line-height: 20px;
  background-color: transparent;
  left: 30px;
  bottom: 40px;
`;

const Wing = styled(Animated.createAnimatedComponent(View))`
  position: absolute;
  background-color: orange;
  border-top-left-radius: 150px;
  z-index: 40;
`;

const Wrapper = styled.View`
  position: absolute;
  padding-left: 30px;
  padding-bottom: 30px;
  width: ${windowWidth};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`;

const OverLay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${windowWidth};
  height: ${windowHeight};
  background-color: white;
  opacity: 0.9;
`;

type Coord = {
  x: number,
  y: number,
};

// takes a decimal like percantage to calculate the position on the slope.
function findCoords(point: number): Coord {
  const yAxis = 300; // Reference height
  const yCoord = point * yAxis; // relative position
  return {
    x: yCoord * windowWidth / yAxis,
    y: yCoord,
  };
}

type Props = {
  loadingMessage: string,
  isLoading: boolean, // if true starts else stops animation.
  onAnimationEnd: () => void,
};

type State = {
  hasAnimationFinished: boolean,
  hasAnimationStarted: boolean,
};

export default class WingTransition extends React.Component<Props, State> {
  state = {
    hasAnimationFinished: false,
    hasAnimationStarted: false,
  };

  static defaultProps = {
    onAnimationEnd: () => null,
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  resetAnimation = () => this.animatedValue.setValue(0);

  triggerAnimation = () => {
    const { onAnimationEnd } = this.props;
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        toValue: 0.66,
        duration: 1200,
      }),
      Animated.timing(this.animatedValue, {
        toValue: 0.33,
        duration: 1000,
      }),
    ]).start(() => {
      if (this.props.isLoading) {
        this.triggerAnimation();
      } else {
        Animated.timing(this.animatedValue, {
          toValue: 1,
          duration: 300,
        }).start(() => {
          this.setState({ hasAnimationFinished: true, hasAnimationStarted: false }, () =>
            onAnimationEnd(),
          );
        });
      }
    });
  };

  renderTransition = (startValueStyle, shouldContinueAnimation) => {
    const { isLoading, loadingMessage } = this.props;
    return (
      <Wrapper>
        {(isLoading || shouldContinueAnimation) && <OverLay />}
        <Wing style={startValueStyle} />
        <ProgressMessage>{loadingMessage}</ProgressMessage>
      </Wrapper>
    );
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading) {
      this.setState({ hasAnimationStarted: true, hasAnimationFinished: false });
      this.resetAnimation();
      this.triggerAnimation();
    }
  }

  render() {
    const { isLoading } = this.props;
    const { hasAnimationFinished, hasAnimationStarted } = this.state;
    const inputRange = [0, 0.1, 0.33, 0.66, 1];
    const heightInterpolation = this.animatedValue.interpolate({
      inputRange,
      outputRange: [110, 110, 80, 120, 150],
    });

    const widthInterpolation = this.animatedValue.interpolate({
      inputRange,
      outputRange: [windowWidth, 40, 80, 120, 150],
    });

    const radiusInterpolation = this.animatedValue.interpolate({
      inputRange,
      outputRange: [0, 0, 150, 150, 150],
    });

    const rightInterpolation = this.animatedValue.interpolate({
      inputRange,
      outputRange: [0, 0, findCoords(0.33).x, findCoords(0.66).x, findCoords(0.9).x],
    });

    const bottomInterpolation = this.animatedValue.interpolate({
      inputRange,
      outputRange: [0, 0, findCoords(0.33).y, findCoords(0.66).y, findCoords(1).y],
    });
    const colorInterpolation = this.animatedValue.interpolate({
      inputRange,
      outputRange: ['orange', 'orange', 'orange', 'orange', '#426C8C'],
    });

    const startValueStyle = [
      { height: heightInterpolation },
      { width: widthInterpolation },
      { right: rightInterpolation },
      { bottom: bottomInterpolation },
      { backgroundColor: colorInterpolation },
      { borderTopLeftRadius: radiusInterpolation },
    ];

    const shouldContinueAnimation = !isLoading && !hasAnimationFinished && hasAnimationStarted;

    if (shouldContinueAnimation || isLoading) {
      return this.renderTransition(startValueStyle, shouldContinueAnimation);
    } else {
      return null;
    }
  }
}
