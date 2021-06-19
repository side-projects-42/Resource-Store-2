[LLVM Home](http://llvm.org/)

libc++ Info [About](/index.html)

Quick Links [cfe-dev](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-dev) [cfe-commits](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-commits) [Bug Reports](http://llvm.org/bugs/) [Browse SVN](http://llvm.org/svn/llvm-project/libcxx/trunk/) [Browse ViewVC](http://llvm.org/viewvc/llvm-project/libcxx/trunk/)

&lt;atomic&gt; design
=====================

This is a variation of design A which puts the burden on the library to arrange for the correct manipulation of the run time memory ordering arguments, and only calls the compiler for well-defined memory orderings. I think of this design as the worst of A and C, instead of the best of A and C. But I offer it as an option in the spirit of completeness.

>     // type must be trivially copyable
>     bool __atomic_is_lock_free(const type* atomic_obj);
>
>     // type must be trivially copyable
>     type __atomic_load_relaxed(const volatile type* atomic_obj);
>     type __atomic_load_consume(const volatile type* atomic_obj);
>     type __atomic_load_acquire(const volatile type* atomic_obj);
>     type __atomic_load_seq_cst(const volatile type* atomic_obj);
>
>     // type must be trivially copyable
>     type __atomic_store_relaxed(volatile type* atomic_obj, type desired);
>     type __atomic_store_release(volatile type* atomic_obj, type desired);
>     type __atomic_store_seq_cst(volatile type* atomic_obj, type desired);
>
>     // type must be trivially copyable
>     type __atomic_exchange_relaxed(volatile type* atomic_obj, type desired);
>     type __atomic_exchange_consume(volatile type* atomic_obj, type desired);
>     type __atomic_exchange_acquire(volatile type* atomic_obj, type desired);
>     type __atomic_exchange_release(volatile type* atomic_obj, type desired);
>     type __atomic_exchange_acq_rel(volatile type* atomic_obj, type desired);
>     type __atomic_exchange_seq_cst(volatile type* atomic_obj, type desired);
>
>     // type must be trivially copyable
>     bool __atomic_compare_exchange_strong_relaxed_relaxed(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_consume_relaxed(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_consume_consume(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_acquire_relaxed(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_acquire_consume(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_acquire_acquire(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_release_relaxed(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_release_consume(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_release_acquire(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_acq_rel_relaxed(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_acq_rel_consume(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_acq_rel_acquire(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_seq_cst_relaxed(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_seq_cst_consume(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_seq_cst_acquire(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>     bool __atomic_compare_exchange_strong_seq_cst_seq_cst(volatile type* atomic_obj,
>                                                           type* expected,
>                                                           type desired);
>
>     // type must be trivially copyable
>     bool __atomic_compare_exchange_weak_relaxed_relaxed(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_consume_relaxed(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_consume_consume(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_acquire_relaxed(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_acquire_consume(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_acquire_acquire(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_release_relaxed(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_release_consume(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_release_acquire(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_acq_rel_relaxed(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_acq_rel_consume(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_acq_rel_acquire(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_seq_cst_relaxed(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_seq_cst_consume(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_seq_cst_acquire(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>     bool __atomic_compare_exchange_weak_seq_cst_seq_cst(volatile type* atomic_obj,
>                                                         type* expected,
>                                                         type desired);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     type __atomic_fetch_add_relaxed(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_add_consume(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_add_acquire(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_add_release(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_add_acq_rel(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_add_seq_cst(volatile type* atomic_obj, type operand);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     type __atomic_fetch_sub_relaxed(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_sub_consume(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_sub_acquire(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_sub_release(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_sub_acq_rel(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_sub_seq_cst(volatile type* atomic_obj, type operand);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     type __atomic_fetch_and_relaxed(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_and_consume(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_and_acquire(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_and_release(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_and_acq_rel(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_and_seq_cst(volatile type* atomic_obj, type operand);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     type __atomic_fetch_or_relaxed(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_or_consume(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_or_acquire(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_or_release(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_or_acq_rel(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_or_seq_cst(volatile type* atomic_obj, type operand);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     type __atomic_fetch_xor_relaxed(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_xor_consume(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_xor_acquire(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_xor_release(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_xor_acq_rel(volatile type* atomic_obj, type operand);
>     type __atomic_fetch_xor_seq_cst(volatile type* atomic_obj, type operand);
>
>     void* __atomic_fetch_add_relaxed(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_add_consume(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_add_acquire(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_add_release(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_add_acq_rel(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_add_seq_cst(void* volatile* atomic_obj, ptrdiff_t operand);
>
>     void* __atomic_fetch_sub_relaxed(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_sub_consume(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_sub_acquire(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_sub_release(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_sub_acq_rel(void* volatile* atomic_obj, ptrdiff_t operand);
>     void* __atomic_fetch_sub_seq_cst(void* volatile* atomic_obj, ptrdiff_t operand);
>
>     void __atomic_thread_fence_relaxed();
>     void __atomic_thread_fence_consume();
>     void __atomic_thread_fence_acquire();
>     void __atomic_thread_fence_release();
>     void __atomic_thread_fence_acq_rel();
>     void __atomic_thread_fence_seq_cst();
>
>     void __atomic_signal_fence_relaxed();
>     void __atomic_signal_fence_consume();
>     void __atomic_signal_fence_acquire();
>     void __atomic_signal_fence_release();
>     void __atomic_signal_fence_acq_rel();
>     void __atomic_signal_fence_seq_cst();
