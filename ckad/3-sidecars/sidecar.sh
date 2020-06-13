#!/bin/bash

kubectl create ns ckad-ns3

kubectl create -f sidecar-pod.yaml

kubectl describe pod sidecar-pod -n ckad-ns3
