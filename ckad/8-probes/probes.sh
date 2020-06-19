#!/bin/bash

kubectl create -f probes-pod.yaml

kubectl describe pod nginx-pathprobe -n ckad-ns3
