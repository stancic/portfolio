require('dotenv').config()
const nodemailer = require('nodemailer')
const mailRouter = require('express').Router()

mailRouter.post('/', async(request, response) => {
	let body = request.body
	let name = body.name
	let mail = body.mail 
	let subject =  body.subject 
	let message = body.message 
	let text = `Sent from ${name}\n${message}`
	let mailOptions = {
		from: mail,
		to: process.env.GMAIL_ADRESS,
		subject: subject,
		text: text
	}
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.GMAIL_ADRESS,
			pass: process.env.GMAIL_PASS 
		}
	})

	transporter.sendMail(mailOptions, (error, info) => {
		if(error){
			console.log(error)
		} else {
			console.log('Message sent: ', info.response)
			console.log('Email message: ', message)
			
		}
	})
})

module.exports = mailRouter