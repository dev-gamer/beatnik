const aws = require("aws-sdk")
const s3 = aws.S3()

//for uploading files

const bucket = ''
const region = ''
const access_key_id = ''
const secret_access_key = ''

exports.cUploader = (req, res) => {
    s3.putObject({
        region,
        access_key,
        secret_access_key
    })
}