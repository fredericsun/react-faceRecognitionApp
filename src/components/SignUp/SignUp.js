import React from 'react';

class SignUp extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onSubmitSignUp = () => {
        fetch('http://localhost:5000/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => response.json())
          .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
            console.log(user);
          })
    }

    render()  {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input className="pa2 input-reset ba bg-transparent w-100 measure" 
                                type="email" 
                                name="email-address" 
                                id="email-address"
                                onChange={this.onEmailChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent" 
                                type="password" 
                                name="password" 
                                id="password"
                                onChange={this.onPasswordChange}/>
                        </div>
                        </fieldset>
                        <div className="mt3">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
                                type="submit" 
                                value="Sign Up" 
                                onClick={this.onSubmitSignUp}/>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}
export default SignUp;