import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            signInEmail: '',
            signInPassword: ''
        };
    };

    onEmailChange = (event) => {
        event.preventDefault();
        this.setState({signInEmail: event.target.value})
    };  
    
    onPasswordChange = (event) => {
        event.preventDefault();
        this.setState({signInPassword: event.target.value})
    }; 

    onSubmitSignIn = (e) => {
        e.preventDefault();
        fetch('https://polar-springs-85501.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id){
                  this.props.loadUser(user);
                  this.props.onRouteChange('home');
                }
            })
    };

    render() {
        const { onRouteChange } = this.props;
        return (
            <React.Fragment>
            <form className='flex flex-column flex-wrap justify-start items-center sans-serif'
                onSubmit={this.onSubmitSignIn}
                method='post'>
                 <main className='mt5 black-80'>
                     <div className='measure'>
                         <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                         <legend className='f4 fw6 ph0 mh0'>Sign In</legend>
                         <div className='mt3'>
                             <label className='f6 b black-70' htmlFor='email-address'>Email</label>
                             <input
                                className='f6 pa2 input-reset ba bg-transparent hover-bg-light-gray w-100' 
                                type='email' 
                                name='email-address'  
                                id='email-address' 
                                onChange={this.onEmailChange}
                             />
                         </div>
                         <div className='mv3'>
                             <label className='f6 b black-70' htmlFor='password'>Password</label>
                             <input 
                                className='f6 b pa2 input-reset ba bg-transparent hover-bg-light-gray  w-100' 
                                type='password' 
                                name='password'  
                                id='password' 
                                autoComplete='on'
                                onChange={this.onPasswordChange}
                             />
                         </div>
                         </fieldset>
                         <div className=''>
                         <input 
                            className='b ph3 pv2 input-reset ba bw1 b--transparent bg-transparent bg-blue shadow-hover white pointer f5 dib' 
                            type='submit' 
                            value='Sign in' 
                        />
                         </div>
                         <div className='lh-measure mt3 f6 pa2'>
                            <p  className=''>Don't have an account?</p>
                            <p  className='pointer hover-blue b'
                                onClick={() => onRouteChange('register')}> Register now</p>
                         </div>
                     </div>
                 </main>
             </form>
        </React.Fragment>
        );
    }
}

export default SignIn;