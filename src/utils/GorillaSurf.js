import React from 'react';
import { motion } from 'framer-motion';

class GorillaSurf extends React.Component {

    render () {
        return (
            <div 
                id='movingGorilla'>
                
                <motion.img
                    animate={{x: 50, y: 100}} 
                    id='gorillaSurfGif'
                    src={require('../images/surfing_gorilla.gif')} />
                
            </div>);
}
}

export default GorillaSurf; 

