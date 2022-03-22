// import SibApiV3Sdk from 'sib-api-v3-sdk';
import sgMail from '@sendgrid/mail'

export async function post({ request }) {
    const data = await request.json();
    
    const apiKey = import.meta.env.VITE_SG_API
    console.log(apiKey)
    sgMail.setApiKey(apiKey)
    const msg = {
      to: 'cs@nureelbeauty.com', // Change to your recipient
      from: 'noreply@hurahure.com', // Change to your verified sender
      subject: 'Feedback',
      text: data.feedback,
      html: '<strong>'+data.feedback+'</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })    
    // let status;
    // let defaultClient = SibApiV3Sdk.ApiClient.instance;
    // let apiKey = defaultClient.authentications['api-key'];
    // apiKey.apiKey = import.meta.env.VITE_SIB_KEY;
    // let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    // let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    // sendSmtpEmail.subject = "Feedback";
    // sendSmtpEmail.htmlContent = "<html><body><h1>{{params.parameter}}</h1></body></html>";
    // // sendSmtpEmail.sender = {"name":data.name,"email":data.email};
    // sendSmtpEmail.sender = {"name":data.name,"email":""};
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
            message: 'Successfully send email',
        },
    }
}