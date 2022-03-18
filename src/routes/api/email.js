import SibApiV3Sdk from 'sib-api-v3-sdk';

export async function post({ request }) {
    const data = await request.json();
    let status;
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = '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';

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Feedback";
    sendSmtpEmail.htmlContent = "<html><body><h1>{{params.parameter}}</h1></body></html>";
    sendSmtpEmail.sender = {"name":data.name,"email":data.email};
    sendSmtpEmail.to = [{"email":"nurhaqq@yahoo.com","name":"Nureel Beauty"}];
    sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
    sendSmtpEmail.params = {"parameter":data.feedback,"subject":"New Subject"};


    apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    status = 200;
    }, function(error) {
    console.error(error);
    status = 500
    });
    return {
        status: status,
        body: {
            message: 'Successfully send email',
        },
    }
}