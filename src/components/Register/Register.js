import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value})
       }  

    onEmailChange = (event) => {
        event.preventDefault();
        this.setState({email: event.target.value})
    }  
    
    onPasswordChange = (event) => {
        event.preventDefault();
        this.setState({password: event.target.value})
    } 

    onSubmitSignIn = (e) => {
        e.preventDefault();
        fetch('https://polar-springs-85501.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
    }
    
    render() {
        const { onRouteChange } = this.props;
        return(
            <React.Fragment>
                <form 
                    className='flex flex-column h-60 justify-start items-center sans-serif mb3' 
                    onSubmit={this.onSubmitSignIn}
                    method='post'>
                     <main className='mt5 black-80'>
                         <div className='measure'>
                             <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                             <legend className='f3 fw6 ph0 mh0'>Register</legend>
                             <div className='mt3'>
                                 <label className='f6 b' htmlFor='name'>Name</label>
                                 <input 
                                    className='pa2 input-reset ba bg-transparent hover-bg-light-gray w-100' 
                                    type='text' 
                                    name='name'  
                                    id='name'
                                    onChange = {this.onNameChange}
                                 />
                             </div>
                             <div className='mt3'>
                                 <label className='f6 b' htmlFor='email-address'>Email</label>
                                 <input 
                                    className='pa2 input-reset ba bg-transparent hover-bg-light-gray w-100' 
                                    type='email' 
                                    name='email-address'  
                                    id='email-address'
                                    onChange = {this.onEmailChange} 
                                 />
                             </div>
                             <div className='mv3'>
                                 <label className='f6 b' htmlFor='password'>Password</label>
                                 <input 
                                    className='b pa2 input-reset ba bg-transparent hover-bg-light-gray w-100' 
                                    type='password' 
                                    name='password'  
                                    id='password'
                                    onChange = {this.onPasswordChange}
                                 />
                             </div>
                             </fieldset>
                             <div className=''>
                             <input 
                                 className='w-30 b ph3 pv2 input-reset ba bw1 b--transparent bg-transparent bg-blue shadow-hover white pointer f5 dib' 
                                 type='submit' 
                                 value='Submit' 
                             />
                             </div>
                             <div className='lh-measure mt3 f6 pa2'>
                                <p  className=''>Already have an account?</p>
                                <p  className='pointer hover-blue b'
                                    onClick={() => onRouteChange('signin')}> Sign in now</p>
                         </div>
                         </div>
                     </main>
                 </form>
            </React.Fragment>
         );
    }
}


export default Register;