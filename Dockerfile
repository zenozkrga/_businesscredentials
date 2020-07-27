FROM gcr.io/google.com/cloudsdktool/cloud-sdk:alpine
RUN mkdir -p /opt/workspace
WORKDIR /opt/workspace
COPY . /opt/workspace/
RUN gcloud config set project kubernetes-269001
RUN gcloud config set pass_credentials_to_gsutil true
RUN chmod +x deploy.sh
