#!/bin/bash

kubectl create deployment nginx-exam --image=nginx:1.8 --dry-run -o yaml >nginx-exam.yaml

kubectl explain deployment.spec.strategy

kubectl explain deployment.spec.strategy.rollingUpdate

kubectl describe deployments nginx-exam

kubectl edit deployment nginx-exam
