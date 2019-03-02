import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function SnapLogIn() {

    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("bitmoji") !== null && localStorage.getItem("name") !== null);

    useEffect(() => {
        if (!loggedIn) {
            window.snapKitInit = function () {
                var loginButtonIconId = 'my-login-button-target';
                // Mount Login Button
                window.snap.loginkit.mountButton(loginButtonIconId, {
                    clientId: 'faaeb827-f8c7-40a7-9053-9b93f648435a',
                    redirectURI: 'http://localhost:3000',
                    scopeList: [
                        'user.display_name',
                        'user.bitmoji.avatar',
                    ],
                    handleResponseCallback: function () {
                        window.snap.loginkit.fetchUserInfo()
                            .then(data => {
                                localStorage.setItem("bitmoji", data.data.me.bitmoji.avatar);
                                localStorage.setItem("name", data.data.me.displayName);
                                setLoggedIn(true);
                            });
                    },
                });
            };

            // Load the SDK asynchronously
            (function (d, s, id) {
                var js, sjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://sdk.snapkit.com/js/v1/login.js";
                sjs.parentNode.insertBefore(js, sjs);
            }(document, 'script', 'loginkit-sdk'));

        }
    });

    return (
        <React.Fragment>
            {loggedIn ? <Redirect to="/app" /> : <div id="my-login-button-target"></div>}
        </React.Fragment>
    )
}

export default SnapLogIn;