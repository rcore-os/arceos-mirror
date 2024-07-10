searchState.loadedDescShard("axio", 0, "<code>std::io</code>-like I/O traits for <code>no_std</code> environment.\nA socket address could not be bound because the address is …\nAn entity already exists, often a file.\nBad address.\nBad internal state.\nA <code>BufRead</code> is a type of <code>Read</code>er which has an internal …\nThe <code>BufReader&lt;R&gt;</code> struct adds buffering to any reader.\nThe connection was refused by the remote server,\nThe connection was reset by the remote server.\nSets the offset to the current position plus the specified …\nA non-empty directory was specified where an empty …\nSets the offset to the size of this object plus the …\nContains the error value\nThe error type used by ArceOS.\nData not valid for the operation were encountered.\nInvalid parameter/argument.\nInput/output error.\nThe filesystem object is, unexpectedly, a directory.\nNot enough space/cannot allocate memory.\nA filesystem object is, unexpectedly, not a directory.\nThe network operation failed because it was not connected …\nThe requested entity is not found.\nContains the success value\nThe operation lacked the necessary privileges to complete.\nI/O poll results.\nThe <code>Read</code> trait allows for reading bytes from a source.\nDevice or resource is busy.\nA specialized <code>Result</code> type with <code>AxError</code> as the error type.\nThe <code>Seek</code> trait provides a cursor which can be moved within …\nEnumeration of possible methods to seek within an I/O …\nSets the offset to the provided number of bytes.\nThe underlying storage (typically, a filesystem) is full.\nAn error returned when an operation could not be completed …\nThis operation is unsupported or unimplemented.\nThe operation needs to block to complete, but the blocking …\nA trait for objects which are byte-oriented sinks.\nAn error returned when an operation could not be completed …\nReturns the error description.\nReturns a reference to the internally buffered data.\nReturns the number of bytes the internal buffer can hold …\nReturns the error code value in <code>i32</code>.\nTells this buffer that <code>amt</code> bytes have been consumed from …\nReturns the contents of the internal buffer, filling it …\nFlush this output stream, ensuring that all intermediately …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets a mutable reference to the underlying reader.\nGets a reference to the underlying reader.\nCheck if the underlying <code>Read</code> has any data left to be read.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps this <code>BufReader&lt;R&gt;</code>, returning the underlying reader.\nCreates a new <code>BufReader&lt;R&gt;</code> with a default buffer capacity …\nThe I/O Prelude.\nPull some bytes from this source into the specified …\nRead the exact number of bytes required to fill <code>buf</code>.\nRead all bytes until a newline (the <code>0xA</code> byte) is reached, …\nRead all bytes until EOF in this source, placing them into …\nRead all bytes until EOF in this source, appending them to …\nRead all bytes into <code>buf</code> until the delimiter <code>byte</code> or EOF is …\nObject can be read now.\nRewind to the beginning of a stream.\nSeek to an offset, in bytes, in a stream.\nReturns the current seek position from the start of the …\nObject can be writen now.\nWrite a buffer into this writer, returning how many bytes …\nAttempts to write an entire buffer into this writer.\nWrites a formatted string into this writer, returning any …")