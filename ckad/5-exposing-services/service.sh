#!/bin/bash

kubectl create ns ckad-ns5

kubectl create deployment nginx-deployment --image=nginx:1.9 -n ckad-ns5

kubectl edit deployment nginx-deployment -n ckad-ns5 # edit the replicas to 3

kubectl expose deployment nginx-deployment --type='NodePort' --port=80 -n ckad-ns5

# to get the deployment yaml
kubectl get deployment nginx-deployment -n ckad-ns5 -o yaml
