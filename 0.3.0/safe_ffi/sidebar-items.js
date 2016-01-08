initSidebarItems({"fn":[["add_service","Add a new service to the existing (registered) Dns record"],["create_account","Create a registered client. This or any one of the other companion functions to get a client must be called before initiating any operation allowed by this crate. `client_handle` is a pointer to a pointer and must point to a valid pointer not junk, else the consequences are undefined."],["create_file","Create a file. The Name of the file is the final token in the given path. Eg., if given path = `/a/b/c/d` then `d` is interpreted as the file intended to be created."],["create_sub_directory","Create a subdirectory. The Name of the subdirectory is the final token in the given path. Eg., if given path = `/a/b/c/d` then `d` is interpreted as the subdirectory intended to be created."],["create_unregistered_client","Create an unregistered client. This or any one of the other companion functions to get a client must be called before initiating any operation allowed by this crate."],["drop_client","Discard and clean up the previously allocated client. Use this only if the client is obtained from one of the client obtainment functions in this crate (`crate_account`, `log_in`, `create_unregistered_client`). Using `client_handle` after a call to this functions is undefined behaviour."],["get_file_content","Read a file. The Name of the file is the final token in the given path. Eg., if given path = `/a/b/c/d` then `d` is interpreted as the file intended to be read. `c_content_buf` should be properly and sufficiently pre-allocated."],["get_file_content_from_service_home_dir","Get file content from service home directory The Name of the file is the final token in the given path. Eg., if given path = `/a/b/c/d` then `d` is interpreted as the file intended to be read. `c_content_buf` should be properly and sufficiently pre-allocated."],["get_file_size","Get the size of the file. c_size should be properly and sufficiently pre-allocated. The Name of the file is the final token in the given path. Eg., if given path = `/a/b/c/d` then `d` is interpreted as the file intended to be read. `c_size` should be properly and sufficiently pre-allocated."],["get_file_size_from_service_home_dir","Get file size from service home directory The Name of the file is the final token in the given path. Eg., if given path = `/a/b/c/d` then `d` is interpreted as the file intended to be read. `c_content_size` should be properly and sufficiently pre-allocated."],["log_in","Log into a registered client. This or any one of the other companion functions to get a client must be called before initiating any operation allowed by this crate. `client_handle` is a pointer to a pointer and must point to a valid pointer not junk, else the consequences are undefined."],["register_dns","Register Dns"]]});