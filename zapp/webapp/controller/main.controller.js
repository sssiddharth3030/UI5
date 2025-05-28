sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/MessageBox"],
    (Controller, MessageToast, MessageBox) => {
        "use strict";

        return Controller.extend("zapp.opensource.com.zapp.controller.main", {
            onInit() {
                this.getView().byId("name").setEditable(false);
                this.getView().byId("street").setEditable(false);
                this.getView().byId("city").setEditable(false);
                this.getView().byId("phone").setEditable(false);
                this.getView().byId("email").setEditable(false);
            },
            onCheck() {

                const getData = async (username) => {
                    // var get = await fetch(`https://jsonplaceholder.typicode.com/users`)

                    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)

                    if (!response.ok) {
                        return -1
                    }

                    const user = await response.json()
                    console.log(`user: ${user}`)
                    console.log(`userName from response : ${user.username}`)
                    
                    return user[0] ? user : -1

                    // fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
                    //     .then(response => {
                    //         console.log(`response:${response.json()}`)
                    //         response.json()
                    //     })
                    //     .then(user => { 
                    //         console.log(`user: ${user}` )  
                    //         return user
                    //     })
                    //     .catch(error => { 
                    //         console.log(error) 
                    //         return error 
                    //     })
                }

                const displayData = (oView, user) => {

                    oView.byId("name").setValue(user[0].name);
                    oView.byId("street").setValue(user[0].address.street);
                    oView.byId("city").setValue(user[0].address.city);
                    oView.byId("phone").setValue(user[0].phone);
                    oView.byId("email").setValue(user[0].email);

                    MessageToast.show(`User: ${user[0].username} Fetched Succesfully`)
                }

                const displayError = (oView, username) => {
                    oView.byId("name").setValue('');
                    oView.byId("street").setValue('');
                    oView.byId("city").setValue('');
                    oView.byId("phone").setValue('');
                    oView.byId("email").setValue('');

                    MessageBox.error(`User : ${username} , is not found .`); 
                }

                const validateUserName = async (oView) => {
                    const userNameInput = oView.byId("username");
                    const userNameValue = userNameInput.getValue();

                    console.log(userNameValue)

                    if (!userNameValue) {
                        MessageToast.show(`Please Enter User`)
                    }
                    else {
                        let data = await getData(userNameValue)

                        if (data === -1) {
                            displayError(oView, userNameValue)
                            return
                        };
                        displayData(oView, data)
                    }
                };

                var oView = this.getView();
                validateUserName(oView);

                // to call a different controller's method
                // sap.ui.controller("zapp.opensource.com.zapp.controller.form").validateUserName();
            },
        });
    }
);
