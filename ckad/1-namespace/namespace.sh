#!/bin/bash

kubectl create ns ckad-ns1

kubectl create -f ckad/1-namespace/namesapce.yaml

kubectl get all --selector='name=pod-b' --all-namespaces
