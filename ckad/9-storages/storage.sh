#!/bin/bash

kubectl create ns ckad-1312

kubectl create -f storage-pv.yaml

kubectl create -f storage-pvc.yaml

kubectl create -f storage-pod.yaml
