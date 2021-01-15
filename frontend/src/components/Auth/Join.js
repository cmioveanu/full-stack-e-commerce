import react from 'react';

export const Join = () => {

    render(
        <form action="/auth/join" method="post">

            <label>Username:</label>
            <input type="text" name="username" />

            <label>Password:</label>
            <input type="password" name="password" />

            <label>Name:</label>
            <input type="text" name="name" />

            <label>Email:</label>
            <input type="email" name="email" />

            <label>Phone:</label>
            <input type="phone" name="phone" />


            <input type="submit" value="Join" />

        </form>
    );
}