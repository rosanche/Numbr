import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './intersection-observer.scss'

export default class IntersectionObserver extends Component {
    
    state = { hasIntersected: false }
    
    targetContainerRef = React.createRef();

    options = {
        root: document.querySelector(".case-product") || null,
        rootMargin: "0px",
        threshold: 0.25
    };

    observer;

    componentDidMount() {
        this.observer = new IntersectionObserver(this.load, this.options);
        this.observer.observe(this.targetContainerRef.current);
    }

    componentWillUnmount() {
        this.observer.unobserve(this.targetContainerRef.current);
    }

    load = (entries) => {
        if (!this.state.hasIntersected) {
          const entry = 
            entries.find(
              entry => entry.target === this.targetContainerRef.current
            );
          if (entry && entry.isIntersecting) {
            this.setState({ hasIntersected: true });
            this.observer.unobserve(this.targetContainerRef.current);
          }
        }
    };

    render() {
        const { children = null } = this.props;
        
        return (
          <div
            //className="intersectionObserver"
            ref={this.targetContainerRef}
            //style={{ ...this.props.style }}
          >
            {/* render the children of this component only when the intersection happens */}
            {this.state.hasIntersected && children}
            <div className="loading-spinner" ref={this.targetContainerRef}>
                <CircularProgress 
                    color='#4A90E2' 
                    size={30} 
                    thickness={6}
                    className='spinner' 
                />
            </div>
          </div>
        );
    }
}