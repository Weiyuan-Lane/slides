#!/bin/sh

PROJECT_ID=`gcloud config list --format 'value(core.project)'`

gcloud builds submit --tag gcr.io/${PROJECT_ID}/slides -q
gcloud beta run deploy --image gcr.io/${PROJECT_ID}/helloworld -q