searchState.loadedDescShard("page_table", 0, "This crate provides generic, unified, …\nThe mapping is already present.\nContains the error value\nThe number of levels of the hardware page table.\nThe page table entry represents a huge page, but the …\nCannot allocate memory.\nThe address is not aligned to the page size.\nThe mapping is not present.\nContains the success value\nThe maximum physical address.\nThe maximum number of bits of physical address.\nThe page sizes supported by the hardware page table.\nA generic page table struct for 64-bit platform.\nThe error type for page table operation failures.\nThe low-level <strong>OS-dependent</strong> helpers that must be provided …\nThe <strong>architecture-dependent</strong> metadata that must be provided …\nThe specialized <code>Result</code> type for page table operations.\nSize of 1 gigabytes (230 bytes).\nSize of 2 megabytes (221 bytes).\nSize of 4 kilobytes (212 bytes).\nThe maximum number of bits of virtual address.\nAArch64 specific page table structures.\nRequest to allocate a 4K-sized physical frame.\nRequest to free a allocated physical frame.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether this page size is considered huge (larger than 4K).\nMaps a virtual page to a physical frame with the given …\nMap a contiguous virtual memory region to a contiguous …\nWhether a given physical address is valid.\nReturns a virtual address that maps to the given physical …\nQuery the result of the mapping starts with <code>vaddr</code>.\nRISC-V specific page table structures.\nReturns the physical address of the root page table.\nCreates a new page table instance or returns the error.\nUnmaps the mapping starts with <code>vaddr</code>.\nUnmap a contiguous virtual memory region.\nUpdates the target or flags of the mapping starts with …\nWhether a given virtual address is valid.\nWalk the page table recursively.\nx86 specific page table structures.\nAArch64 VMSAv8-64 translation table.\nMetadata of AArch64 page tables.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMetadata of RISC-V Sv39 page tables.\nSv39: Page-Based 39-bit (3 levels) Virtual-Memory System.\nMetadata of RISC-V Sv48 page tables.\nSv48: Page-Based 48-bit (4 levels) Virtual-Memory System.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nx86_64 page table.\nmetadata of x86_64 page tables.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")