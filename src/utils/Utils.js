'use strict';

import React from 'react';
import {Dimensions} from 'react-native';

const Util = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
};

export default Util;