import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return(
                <React.Fragment>
                    <header className='container w-100 pa3 ph3-ns sans-serif mb4 bt bw3 b--blue'>
                        <div className='db dt-ns mw8 center black-80 w-100'>
                            <div className='db dtc-ns v-mid tl w-50'>
                                <p className='f4 fw6 lh-title' title='Home'>
                                    Face Detect <span className='blue'>[</span>:)<span className='blue'>]</span>
                                </p>
                            </div>
                            <nav className='db dtc-ns v-mid w-100 tl tr-ns black-70'>
                                <p  onClick={() => onRouteChange('signout')}
                                    className='f5 fw6 hover-blue hover-bb pointer mr2 mr3-m mr4-l dib'>
                                    Sign Out
                                </p>
                            </nav>
                        </div>
                    </header>
                </React.Fragment>
             );
        } else {
            return(
                <React.Fragment>
                <header className='container w-100 pa3 ph3-ns sans-serif bt bw3 b--blue'>
                    <div className='db dt-ns mw8 center black-80 w-100'>
                        <div className='db dtc-ns v-mid tl w-50'>
                            <p className='f4 fw6 lh-title' title='Home'>
                                Face Detect <span className='blue'>[</span>:)<span className='blue'>]</span>
                            </p>
                        </div>
                        <nav className='db dtc-ns v-mid w-100 tl tr-ns black-70'>
                            <p  onClick={() => onRouteChange('signin')}
                                className='f5 fw6 hover-blue hover-bb pointer mr2 mr3-m mr4-l dib'>
                                Sign In
                            </p>
                            <p  onClick={() => onRouteChange('register')}
                                className='f5 fw6 hover-blue hover-bb pointer mr2 mr3-m mr4-l dib'>
                                Register
                            </p>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
            )
        }
}

export default Navigation;