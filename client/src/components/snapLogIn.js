import React, { useEffect }  from 'react';

function SnapLogIn(props) {

    useEffect(() => {
        window.snapKitInit = function () {
            console.log(props);
            var loginButtonIconId = 'my-login-button-target';
            // Mount Login Button
            window.snap.loginkit.mountButton(loginButtonIconId, {
              clientId: 'faaeb827-f8c7-40a7-9053-9b93f648435a',
              redirectURI: 'http://localhost:3000',
              scopeList: [
                'user.display_name',
                'user.bitmoji.avatar',
              ],
              handleResponseCallback: function() {
                window.snap.loginkit.fetchUserInfo()
                  .then(data => {
                      props.handleLogin(data.data.me.bitmoji.avatar, data.data.me.displayName)
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
    }, []);

    return (
        <React.Fragment>
            <div id="my-login-button-target"></div>
        </React.Fragment>
    )
}

export default SnapLogIn;