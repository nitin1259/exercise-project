#!/bin/bash

kubectl logs sidecar-pod -n ckad-ns3 -c log-collector

kubectl logs sidecar-pod -n ckad-ns3 -c app
