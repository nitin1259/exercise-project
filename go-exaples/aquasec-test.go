// Aqua Security--

/*

FullStack Developer
The following test is written with Go in mind, and we would strongly prefer if tests are solved with Go. However, this is not a hard rule, and you can use a different programming language if you prefer. Please do not host your results in a private repository such as GitHub.
Stage 1 Write a program that does the following:
	1. Traverses the file system starting from the root directory, or from a path provided by the user via the command line.
	2. Finds all regular files and gets their information (a.k.a file stats, either via os.FileInfo or the standard Unix stat(1) command).
	3. Sends this information via POST requests, serialized as JSON, to an HTTP address provided by the user via the command line.
Guidelines: o Traversal may happen with just one thread (or goroutine), but there must be at least 3 threads sending file information to the HTTP address. This means traversal and sending happen in different threads. o The program must provide proper usage information when --help is used.
Stage 2 Write another program that does the following:
	1. Starts an HTTP server listening on a port defined by the user via the command line, as either an HTTP server or an HTTPS (TLS) server, again depending on the user's input.
	2. Maintains a structure of the following file statistics: i. Number of files received ii. Maximum file size (including file path) iii. Average file size iv. List of file extensions v. Most frequent file extension (including number of occurences) vi. List of latest 10 file paths received
	3. Accepts POST requests formatted as JSON to a path of your choosing, which are expected to contain file information (the same information sent in stage 1), and updates the statistics according to the information.
	4. Accepts GET requests to a path of your choosing, and returns the (current) statistics as JSON.
Guidelines: o Since multiple POST requests may be received at the same time, care must be taken that the statistics are updated atomically (that is to say, the effects of one request should not be overridden by another one). o The server must properly return errors when provided invalid inputs. o The program must provide proper usage information when --help is used.
Stage 3 Create a single page application with  Login page  Home page to show two options  View latest statistics, when clicks on it, hit the get request (created in Stage #2) and show the response in a tabular format.  Post new statistics, when clicks on it, show a form with all the fields required for POST request (created in Stage #2) and submit the data to the POST request.
Guidelines:  For login, you don’t need to create any services/DB, just keep a static username and password in code.  You can use any frontend framework that you are comfortable with. But VueJS is preferable.  Keep some sensible validations for the form and validate the inputs before submitting the data to server  Keep the UI simple and appropriate. No need to spend much time on designing beautiful UI.
Bonus Tasks: Feel free to skip these, but if you have the time and feel like it, we would really appreciate if you could also do any of the following tasks:
	1. Modify the server so that the POST endpoint may accept both JSON and XML requests, depending on the client's choice.
	2. Write another program the continuously makes GET requests to the server (at a user-provided interval) and prints the statistics to standard output.
	3. Create Dockerfiles for both executables. You can either create two images, or one image that starts the appropriate executable based on command line arguments.
	4. Bonus bonus: create a multi-stage Dockerfile that both builds the executables and creates a Docker image for them.

*/
