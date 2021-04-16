import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return(
                <React.Fragment>
                    <header className='container pa3 sans-serif mb3 bt bw3 b--blue'>
                        <div className='flex items-center'>
                            <div className='flex-auto v-mid tl w-50'>
                                <p className='f4 b tracked-tight'>
                                    Face Detect <span className='blue'>[</span>:)<span className='blue'>]</span>
                                </p>
                            </div>
                            <nav className='nav flex-auto v-mid tr black-70 w-50'>
                                <p  onClick={() => onRouteChange('signout')}
                                    className='nav-item f5 fw6 hover-black pointer dib'>
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
                <header className='container pa3 sans-serif mb3 bt bw3 b--blue'>
                    <div className='flex items-center'>
                        <div className='flex-auto v-mid tl w-50'>
                            <p className='f4 b tracked-tight' title='Home'>
                                Face Detect <span className='blue'>[</span>:)<span className='blue'>]</span>
                            </p>
                        </div>
                        <nav className='nav flex-auto v-mid tr black-70 w-50'>
                            <p  onClick={() => onRouteChange('signin')}
                                className='nav-item f5 fw6 hover-black pointer mr2 mr3-m mr4-l dib'>
                                Sign In
                            </p>
                            <p  onClick={() => onRouteChange('register')}
                                className='nav-item f5 fw6 hover-black pointer dib'>
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