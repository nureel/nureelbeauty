import SibApiV3Sdk from 'sib-api-v3-sdk';

export async function post({ request }) {
    const data = await request.json();
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = import.meta.env.VITE_SIB_KEY;
    // let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    // let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // sendSmtpEmail.subject = "Feedback";
    // sendSmtpEmail.htmlContent = "<html><body><h1>{{params.parameter}}</h1></body></html>";
    // sendSmtpEmail.sender = {"name":data.name,"email":data.email};
    // sendSmtpEmail.to = [{"email":"cs@nureelbeauty.com","name":"Nureel Beauty"}];
    // sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    // sendSmtpEmail.params = {"parameter":data.feedback,"subject":"New Subject"};

    // apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    //   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    // }, function(error) {
    //   // console.error(error);
    // });

    return {
        body: {
            message: apiKey.apiKey,
        },
    }
}