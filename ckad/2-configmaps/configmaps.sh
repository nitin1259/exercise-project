kubectl create ns ckad-ns2

kubectl create configmap my-config --from-literal=localport=localhost:8082 --from-literal=external_url=linux.com -n ckad-ns2

kubectl get configmap my-config -o yaml

kubectl get cm -n ckad-ns2

kubectl create -f configmap-pods.yaml

kubectl describe pod alpine-pod -n ckad-ns2

kubectl exec -it alpine-pod -n ckad-ns2 -- /bin/sh
