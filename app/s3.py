import boto3

BUCKET_NAME = "melodieapp"


def upload_file(file):
    """
    Function to upload a file to standard S3 bucket
    """
    s3_client = boto3.client('s3')
    object_name = file.filename
    response = s3_client.upload_fileobj(file, BUCKET_NAME, object_name, ExtraArgs={'ACL': 'public-read'})

    return "https://{0}.s3.amazonaws.com/{1}".format(
        BUCKET_NAME,
        object_name
    )
