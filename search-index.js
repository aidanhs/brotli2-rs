var searchIndex = {};
searchIndex["brotli2"] = {"doc":"Brotli Compression/Decompression for Rust","items":[[0,"stream","brotli2","In-memory compression/decompression streams",null,null],[3,"Decompress","brotli2::stream","In-memory state for decompressing brotli-encoded data.",null,null],[3,"Compress","","In-memory state for compressing/encoding data with brotli",null,null],[3,"CompressParams","","Parameters passed to various compression routines.",null,null],[3,"Error","","Error that can happen from decompressing or compressing a brotli stream.",null,null],[4,"CompressMode","","Possible choices for modes of compression",null,null],[13,"Generic","","Default compression mode, the compressor does not know anything in advance about the properties of the input.",0,null],[13,"Text","","Compression mode for utf-8 formatted text input.",0,null],[13,"Font","","Compression mode in WOFF 2.0.",0,null],[4,"Status","","Possible status results returned from compressing or decompressing.",null,null],[13,"Finished","","Decompression was successful and has finished",1,null],[13,"NeedInput","","More input is needed to continue",1,null],[13,"NeedOutput","","More output is needed to continue",1,null],[5,"decompressed_size","","Returns the decompressed size of the given encoded stream.",null,null],[5,"decompress_buf","","Decompress data in one go in memory.",null,null],[5,"compress_buf","","Compresses the data in `input` into `output`.",null,null],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"compressparams"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"compressmode"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"error"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"self"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"status"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"status"}],"output":{"name":"bool"}}],[11,"new","","Creates a new brotli decompression/decoding stream ready to receive data.",4,{"inputs":[],"output":{"name":"decompress"}}],[11,"decompress","","Decompress a block of input data into a block of output data.",4,null],[11,"decompress_vec","","Decompress a block of input data into the remaining capacity of a vector.",4,null],[11,"drop","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new compressor ready to encode data into brotli",5,{"inputs":[],"output":{"name":"compress"}}],[11,"input_block_size","","Returns the maximum amount of data that can be internally buffered to get processed at once.",5,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"copy_input","","Feeds data into this compressor.",5,null],[11,"compress","","Compresses the internal data in this compressor, returning the output buffer of the compressed data.",5,{"inputs":[{"name":"self"},{"name":"bool"},{"name":"bool"}],"output":{"name":"result"}}],[11,"set_params","","Configure the parameters of this compression session.",5,{"inputs":[{"name":"self"},{"name":"compressparams"}],"output":null}],[11,"drop","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new default set of compression parameters.",2,{"inputs":[],"output":{"name":"compressparams"}}],[11,"mode","","Set the mode of this compression.",2,{"inputs":[{"name":"self"},{"name":"compressmode"}],"output":{"name":"compressparams"}}],[11,"quality","","Controls the compression-speed vs compression-density tradeoffs.",2,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"compressparams"}}],[11,"lgwin","","Sets the base 2 logarithm of the sliding window size.",2,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"compressparams"}}],[11,"lgblock","","Sets the base 2 logarithm of the maximum input block size.",2,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"compressparams"}}],[11,"get_lgblock_readable","","Get the current block size",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"get_lgblock","","Get the native lgblock size",2,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"get_lgwin_readable","","Get the current window size",2,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"get_lgwin","","Get the native lgwin value",2,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[0,"bufread","brotli2","I/O streams for wrapping `BufRead` types as encoders/decoders",null,null],[3,"BrotliEncoder","brotli2::bufread","A brotli encoder, or compressor.",null,null],[3,"BrotliDecoder","","A brotli decoder, or decompressor.",null,null],[11,"new","","Creates a new encoder which will read uncompressed data from the given stream and emit the compressed stream.",6,{"inputs":[{"name":"r"},{"name":"u32"}],"output":{"name":"brotliencoder"}}],[11,"from_params","","Creates a new encoder with a custom `CompressParams`.",6,{"inputs":[{"name":"r"},{"name":"compressparams"}],"output":{"name":"brotliencoder"}}],[11,"get_ref","","Acquires a reference to the underlying stream",6,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",6,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",6,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",6,null],[11,"new","","Creates a new decoder which will decompress data read from the given stream.",7,{"inputs":[{"name":"r"}],"output":{"name":"brotlidecoder"}}],[11,"get_ref","","Acquires a reference to the underlying stream",7,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",7,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",7,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",7,null],[0,"read","brotli2","Reader-based compression/decompression streams",null,null],[3,"BrotliEncoder","brotli2::read","A compression stream which wraps an uncompressed stream of data. Compressed data will be read from the stream.",null,null],[3,"BrotliDecoder","","A decompression stream which wraps a compressed stream of data. Decompressed data will be read from the stream.",null,null],[11,"new","","Create a new compression stream which will compress at the given level to read compress output to the give output stream.",8,{"inputs":[{"name":"r"},{"name":"u32"}],"output":{"name":"brotliencoder"}}],[11,"from_params","","Configure the compression parameters of this encoder.",8,{"inputs":[{"name":"r"},{"name":"compressparams"}],"output":{"name":"brotliencoder"}}],[11,"get_ref","","Acquires a reference to the underlying stream",8,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",8,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Unwrap the underlying writer, finishing the compression stream.",8,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",8,null],[11,"new","","Create a new decompression stream, which will read compressed data from the given input stream and decompress it.",9,{"inputs":[{"name":"r"}],"output":{"name":"brotlidecoder"}}],[11,"get_ref","","Acquires a reference to the underlying stream",9,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"get_mut","","Acquires a mutable reference to the underlying stream",9,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"into_inner","","Unwrap the underlying writer, finishing the compression stream.",9,{"inputs":[{"name":"self"}],"output":{"name":"r"}}],[11,"read","","",9,null],[0,"write","brotli2","Writer-based compression/decompression streams",null,null],[3,"BrotliEncoder","brotli2::write","A compression stream which will have uncompressed data written to it and will write compressed data to an output stream.",null,null],[3,"BrotliDecoder","","A compression stream which will have compressed data written to it and will write uncompressed data to an output stream.",null,null],[11,"new","","Create a new compression stream which will compress at the given level to write compress output to the give output stream.",10,{"inputs":[{"name":"w"},{"name":"u32"}],"output":{"name":"brotliencoder"}}],[11,"from_params","","Creates a new encoder with a custom `CompressParams`.",10,{"inputs":[{"name":"w"},{"name":"compressparams"}],"output":{"name":"brotliencoder"}}],[11,"finish","","Consumes this encoder, flushing the output stream.",10,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"write","","",10,null],[11,"flush","","",10,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"drop","","",10,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Creates a new decoding stream which will decode all input written to it into `obj`.",11,{"inputs":[{"name":"w"}],"output":{"name":"brotlidecoder"}}],[11,"finish","","Unwrap the underlying writer, finishing the compression stream.",11,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"write","","",11,null],[11,"flush","","",11,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"drop","","",11,{"inputs":[{"name":"self"}],"output":null}]],"paths":[[4,"CompressMode"],[4,"Status"],[3,"CompressParams"],[3,"Error"],[3,"Decompress"],[3,"Compress"],[3,"BrotliEncoder"],[3,"BrotliDecoder"],[3,"BrotliEncoder"],[3,"BrotliDecoder"],[3,"BrotliEncoder"],[3,"BrotliDecoder"]]};
searchIndex["brotli_sys"] = {"doc":"","items":[[3,"BrotliStateStruct","brotli_sys","",null,null],[12,"state","","",0,null],[12,"loop_counter","","",0,null],[12,"br","","",0,null],[12,"alloc_func","","",0,null],[12,"free_func","","",0,null],[12,"memory_manager_opaque","","",0,null],[12,"buffer_length","","",0,null],[12,"pos","","",0,null],[12,"max_backward_distance","","",0,null],[12,"max_backward_distance_minus_custom_dict_size","","",0,null],[12,"max_distance","","",0,null],[12,"ringbuffer_size","","",0,null],[12,"ringbuffer_mask","","",0,null],[12,"dist_rb_idx","","",0,null],[12,"dist_rb","","",0,null],[12,"error_code","","",0,null],[12,"sub_loop_counter","","",0,null],[12,"ringbuffer","","",0,null],[12,"ringbuffer_end","","",0,null],[12,"htree_command","","",0,null],[12,"context_lookup1","","",0,null],[12,"context_lookup2","","",0,null],[12,"context_map_slice","","",0,null],[12,"dist_context_map_slice","","",0,null],[12,"literal_hgroup","","",0,null],[12,"insert_copy_hgroup","","",0,null],[12,"distance_hgroup","","",0,null],[12,"block_type_trees","","",0,null],[12,"block_len_trees","","",0,null],[12,"trivial_literal_context","","",0,null],[12,"distance_context","","",0,null],[12,"meta_block_remaining_len","","",0,null],[12,"block_length_index","","",0,null],[12,"block_length","","",0,null],[12,"num_block_types","","",0,null],[12,"block_type_rb","","",0,null],[12,"distance_postfix_bits","","",0,null],[12,"num_direct_distance_codes","","",0,null],[12,"distance_postfix_mask","","",0,null],[12,"num_dist_htrees","","",0,null],[12,"dist_context_map","","",0,null],[12,"literal_htree","","",0,null],[12,"dist_htree_index","","",0,null],[12,"repeat_code_len","","",0,null],[12,"prev_code_len","","",0,null],[12,"copy_length","","",0,null],[12,"distance_code","","",0,null],[12,"rb_roundtrips","","",0,null],[12,"partial_pos_out","","",0,null],[12,"symbol","","",0,null],[12,"repeat","","",0,null],[12,"space","","",0,null],[12,"table","","",0,null],[12,"symbol_lists","","",0,null],[12,"symbols_lists_array","","",0,null],[12,"next_symbol","","",0,null],[12,"code_length_code_lengths","","",0,null],[12,"code_length_histo","","",0,null],[12,"htree_index","","",0,null],[12,"next","","",0,null],[12,"context_index","","",0,null],[12,"max_run_length_prefix","","",0,null],[12,"code","","",0,null],[12,"context_map_table","","",0,null],[12,"mtf_upper_bound","","",0,null],[12,"mtf","","",0,null],[12,"custom_dict","","",0,null],[12,"custom_dict_size","","",0,null],[12,"substate_metablock_header","","",0,null],[12,"substate_tree_group","","",0,null],[12,"substate_context_map","","",0,null],[12,"substate_uncompressed","","",0,null],[12,"substate_huffman","","",0,null],[12,"substate_decode_uint8","","",0,null],[12,"substate_read_block_length","","",0,null],[12,"is_last_metablock","","",0,null],[12,"is_uncompressed","","",0,null],[12,"is_metadata","","",0,null],[12,"size_nibbles","","",0,null],[12,"window_bits","","",0,null],[12,"num_literal_htrees","","",0,null],[12,"context_map","","",0,null],[12,"context_modes","","",0,null],[12,"trivial_literal_contexts","","",0,null],[3,"BrotliBitReader","","",null,null],[12,"val_","","",1,null],[12,"bit_pos_","","",1,null],[12,"next_in","","",1,null],[12,"avail_in","","",1,null],[3,"HuffmanCode","","",null,null],[12,"bits","","",2,null],[12,"value","","",2,null],[3,"HuffmanTreeGroup","","",null,null],[12,"htrees","","",3,null],[12,"codes","","",3,null],[12,"alphabet_size","","",3,null],[12,"num_htrees","","",3,null],[4,"BrotliEncoderState","","",null,null],[5,"BrotliCreateState","","",null,null],[5,"BrotliDestroyState","","",null,null],[5,"BrotliDecompressedSize","","",null,null],[5,"BrotliDecompressBuffer","","",null,null],[5,"BrotliDecompressStream","","",null,null],[5,"BrotliSetCustomDictionary","","",null,null],[5,"BrotliStateInit","","",null,null],[5,"BrotliStateInitWithCustomAllocators","","",null,null],[5,"BrotliStateCleanup","","",null,null],[5,"BrotliStateMetablockBegin","","",null,null],[5,"BrotliStateCleanupAfterMetablock","","",null,null],[5,"BrotliHuffmanTreeGroupInit","","",null,null],[5,"BrotliHuffmanTreeGroupRelease","","",null,null],[5,"BrotliStateIsStreamStart","","",null,null],[5,"BrotliStateIsStreamEnd","","",null,null],[5,"BrotliBuildCodeLengthsHuffmanTable","","",null,null],[5,"BrotliBuildHuffmanTable","","",null,null],[5,"BrotliBuildSimpleHuffmanTable","","",null,null],[5,"BrotliEncoderSetParameter","","",null,null],[5,"BrotliEncoderCreateInstance","","",null,null],[5,"BrotliEncoderDestroyInstance","","",null,null],[5,"BrotliEncoderInputBlockSize","","",null,null],[5,"BrotliEncoderWriteMetaBlock","","",null,null],[5,"BrotliEncoderWriteMetadata","","",null,null],[5,"BrotliEncoderFinishStream","","",null,null],[5,"BrotliEncoderCopyInputToRingBuffer","","",null,null],[5,"BrotliEncoderWriteData","","",null,null],[5,"BrotliEncoderSetCustomDictionary","","",null,null],[5,"BrotliEncoderMaxCompressedSize","","",null,null],[5,"BrotliEncoderCompress","","",null,null],[5,"BrotliEncoderCompressStream","","",null,null],[5,"BrotliEncoderIsFinished","","",null,null],[5,"BrotliEncoderHasMoreOutput","","",null,null],[6,"brotli_alloc_func","","",null,null],[6,"brotli_free_func","","",null,null],[6,"BrotliResult","","",null,null],[6,"BrotliRunningState","","",null,null],[6,"BrotliRunningMetablockHeaderState","","",null,null],[6,"BrotliRunningUncompressedState","","",null,null],[6,"BrotliRunningTreeGroupState","","",null,null],[6,"BrotliRunningContextMapState","","",null,null],[6,"BrotliRunningHuffmanState","","",null,null],[6,"BrotliRunningDecodeUint8State","","",null,null],[6,"BrotliRunningReadBlockLengthState","","",null,null],[6,"BrotliState","","",null,null],[6,"reg_t","","",null,null],[6,"BrotliEncoderMode","","",null,null],[6,"BrotliEncoderParameter","","",null,null],[6,"BrotliEncoderOperation","","",null,null],[17,"BROTLI_RESULT_ERROR","","",null,null],[17,"BROTLI_RESULT_SUCCESS","","",null,null],[17,"BROTLI_RESULT_NEEDS_MORE_INPUT","","",null,null],[17,"BROTLI_RESULT_NEEDS_MORE_OUTPUT","","",null,null],[17,"BROTLI_MODE_GENERIC","","",null,null],[17,"BROTLI_MODE_TEXT","","",null,null],[17,"BROTLI_MODE_FONT","","",null,null],[17,"BROTLI_PARAM_MODE","","",null,null],[17,"BROTLI_PARAM_QUALITY","","",null,null],[17,"BROTLI_PARAM_LGWIN","","",null,null],[17,"BROTLI_PARAM_LGBLOCK","","",null,null],[17,"BROTLI_OPERATION_PROCESS","","",null,null],[17,"BROTLI_OPERATION_FLUSH","","",null,null],[17,"BROTLI_OPERATION_FINISH","","",null,null],[17,"BROTLI_DEFAULT_QUALITY","","",null,null],[17,"BROTLI_DEFAULT_WINDOW","","",null,null],[17,"BROTLI_DEFAULT_MODE","","",null,null]],"paths":[[3,"BrotliStateStruct"],[3,"BrotliBitReader"],[3,"HuffmanCode"],[3,"HuffmanTreeGroup"]]};
initSearch(searchIndex);
