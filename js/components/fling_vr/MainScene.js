'use strict';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Viro360Image, ViroAnimations, ViroImage, ViroScene } from 'react-viro';

const westLakeTowersScene = require('./WestLakeTowers');
const backgroundImage = require('./res/airport.jpg');
const weworkImage = require('./res/fling.png');

export default class MainScene extends PureComponent {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      runShowTitleAnimation : false,
    }

    // bind `this` to functions
    this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this);
    this._onTitleClicked = this._onTitleClicked.bind(this);
  }

  render() {
      const { onShow, onClose } = this.props
    return (
        <Fragment>
            {onShow && (
                <Fragment>
                    <ViroScene style={styles.container}>
                    <Viro360Image source={backgroundImage} onLoadEnd={this._onBackgroundPhotoLoadEnd}/>
                    
                    <ViroImage
                    position={[0, 0, -5]} source={weworkImage} scale={[.2, .2, .2]}
                    opacity={0.0} onClick={this._onTitleClicked}
                    animation={{
                        name : "showTitleAnimation",
                        run : this.state.runShowTitleAnimation,
                        loop : false,
                    }} />
                    </ViroScene>
                    <Button title="Close" onPress={() => onClose} />
                </Fragment>
            )}
        </Fragment>
    );
  }

  /**
   * Callback function for when image has finished loading in the Viro360Photo.
   * We then animate the WeWork ViroImage into the scene through the
   * setting of state runShowTitleAnimation.
   */
  _onBackgroundPhotoLoadEnd() {
      this.setState({
          runShowTitleAnimation:true
      });
  }

  /**
   * Callback function for when the user taps on the WeWork ViroImage
   * where we navigate into the second scene.
   */
  _onTitleClicked() {
      this.props.sceneNavigator.push({scene:westLakeTowersScene});
  }
}

/**
 * Declare all custom flex box styles here to be reference by the
 * controls above.
 */
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

/**
 * Declare all your animations here. They'll be referenced by the animation props.
 */
ViroAnimations.registerAnimations({
    showTitleAnimation: {properties:{scaleX:2, scaleY:2, scaleZ:2, opacity:1.0}, easing:"PowerDecel", duration:1000},
});


MainScene.propTypes = {
    onShow: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

module.exports = MainScene;
