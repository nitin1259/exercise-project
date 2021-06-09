/**
 * Dependency graph implementation
 * Question: Create a dependency graph utility that allows adding nodes and edges. 
 * Get dependencies for a node, and throw an error if there is a cyclic dependency
 * Ex: Nodes: [N1, N2, N3, N4] Edges [N2-> N1, N3 -> N4, N4 -> N1 ]
 * Deps of N2: N1
 * Deps of N3: N4
 * 
 * If [N1 -> N4], Throw cyclic dependency error 
 * 
 * Optional: Print the safe order for dependency resolution
 */

Graph = fucntion(){
  this.nodes = {}
  this.edges = []
}



Graph.prototype.addNode = fucntion(id, object){
  
  var node = new Graph.Node(id, object)
  
  if (!this.hasNode(node)) {
    this.nodes[node.id]=node
  }
  return this.nodes[node.id]
}


Graph.prototype.addEdge = fucntion (src, target, options){
  
  
  src = this.addNode(src)
  target = this.addNode(target)
  
  
  var edge = new Graph.Edge(src, target, options);
  
  if(this.hasEdge(edge)){
    return
  }
  
  src.addEdge(edge)
  target.addEdge(edge)
  
  Graph.Node.prototype.dependency = fucntion (destination){
  
    if (!this.depenedMap) this.depenMap = new Map{};
  
    this.depenMap[this] = destination
  
}
  
  this.edges.push(edge)
  
  return edge
}

Graph.Node = fucntion(id, obj){
  this.id = id;
  this.obj = obj || {}
  this.edges = []
}

Graph.Edges = fucntion(src, target, options){
  this.src = src
  this.target = target
  this.options = options|| {}
}

// A->B

Graph.Node.prototype.addEdge= fucntion(){
  
  if(!this.hasEdge(edge)){
    this.edge.push(edge)
  }
  
}

Graph.Node.prototype.hasEdge = fucntion(edge){
  
  return this.edges.find(e => e.equals(edge))
}


Graph.Node.prototype.dependency = fucntion (destination){
  
    if (!this.depenedMap) this.depenMap = new Map{};
  
    this.depenMap[this] = destination
  
}
    

/**
 * Publish/Subscribe Implementation
 * Question: Create a broadcasting system for  a list of topics which can publish messages.
 * And allow any subscribers to subscribe and consume the message.
 * Ex: Topics : [t1,t2,t3, ...] Subscribers [s1, s2, s3... ].
 * Note: The subscriber should also have the ability to unsubscribe from a particular topic.
 * 
 * Optional question : Add ability to pause/restart a topic. When a topic is paused, topic can receive the messages but cannot publish them, only buffer.
 * When topic is restarted all buffered messages get published synchronously.
 */



fucntion Handler(){
  
  this.topicmap = Map(topic, subscripter[])
  // this.handlers = [];
}

Handler.prototype.addTopic = fucntion(topic){
  
  this.topicmap.add(topic, new Array());
}


Handler.prototype.subscribe = fucntion(topi, h){
  // this.handlers.push(h)
  
  this.handlers.toppicmap[topic] = this.handlers.toppicmap[topic].push(h)
}


Handler.prototype.unsubscribe = fucntion (h){
  
  // same 
  var rem = this.handlers.toppicmap[topic].filter(item => item!=h)
  
  this.handlers.toppicmap[topic] = rem;
}



Handler.prototype.broadcast = fucntion(topip , o, thisojb){
  
    var broad = thisojb || window;
    this.handlers.toppicmap[topic].forEach(s => { 
      
      
        if(s.pasuedTopic( top => top===topic)){
          
          s.parkedNotificat.push(o)
          continue;
        }
      
      s.call(broad, o)
      
      
    
    
    })
}
