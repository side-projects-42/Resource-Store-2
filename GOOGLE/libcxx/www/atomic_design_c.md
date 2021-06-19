[LLVM Home](http://llvm.org/)

libc++ Info [About](/index.html)

Quick Links [cfe-dev](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-dev) [cfe-commits](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-commits) [Bug Reports](http://llvm.org/bugs/) [Browse SVN](http://llvm.org/svn/llvm-project/libcxx/trunk/) [Browse ViewVC](http://llvm.org/viewvc/llvm-project/libcxx/trunk/)

&lt;atomic&gt; design
=====================

The `<atomic>` header is one of the most closely coupled headers to the compiler. Ideally when you invoke any function from `<atomic>`, it should result in highly optimized assembly being inserted directly into your application … assembly that is not otherwise representable by higher level C or C++ expressions. The design of the libc++ `<atomic>` header started with this goal in mind. A secondary, but still very important goal is that the compiler should have to do minimal work to faciliate the implementaiton of `<atomic>`. Without this second goal, then practically speaking, the libc++ `<atomic>` header would be doomed to be a barely supported, second class citizen on almost every platform.

Goals:

> -   Optimal code generation for atomic operations
> -   Minimal effort for the compiler to achieve goal 1 on any given platform
> -   Conformance to the C++0X draft standard

The purpose of this document is to inform compiler writers what they need to do to enable a high performance libc++ `<atomic>` with minimal effort.

The minimal work that must be done for a conforming `<atomic>`
--------------------------------------------------------------

The only “atomic” operations that must actually be lock free in `<atomic>` are represented by the following compiler intrinsics:

>     __atomic_flag__
>     __atomic_exchange_seq_cst(__atomic_flag__ volatile* obj, __atomic_flag__ desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         __atomic_flag__ result = *obj;
>         *obj = desr;
>         return result;
>     }
>
>     void
>     __atomic_store_seq_cst(__atomic_flag__ volatile* obj, __atomic_flag__ desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         *obj = desr;
>     }

Where:

> -   If `__has_feature(__atomic_flag)` evaluates to 1 in the preprocessor then the compiler must define `__atomic_flag__` (e.g. as a typedef to `int`).
> -   If `__has_feature(__atomic_flag)` evaluates to 0 in the preprocessor then the library defines `__atomic_flag__` as a typedef to `bool`.
> -   To communicate that the above intrinsics are available, the compiler must arrange for `__has_feature` to return 1 when fed the intrinsic name appended with an ‘\_’ and the mangled type name of `__atomic_flag__`.
>
>     For example if `__atomic_flag__` is `unsigned int`:
>
>     >     __has_feature(__atomic_flag) == 1
>     >     __has_feature(__atomic_exchange_seq_cst_j) == 1
>     >     __has_feature(__atomic_store_seq_cst_j) == 1
>     >
>     >     typedef unsigned int __atomic_flag__; 
>     >
>     >     unsigned int __atomic_exchange_seq_cst(unsigned int volatile*, unsigned int)
>     >     {
>     >        // ...
>     >     }
>     >
>     >     void __atomic_store_seq_cst(unsigned int volatile*, unsigned int)
>     >     {
>     >        // ...
>     >     }
>
> That’s it! Compiler writers do the above and you’ve got a fully conforming (though sub-par performance) `<atomic>` header!

Recommended work for a higher performance `<atomic>`
----------------------------------------------------

It would be good if the above intrinsics worked with all integral types plus `void*`. Because this may not be possible to do in a lock-free manner for all integral types on all platforms, a compiler must communicate each type that an intrinsic works with. For example if `__atomic_exchange_seq_cst` works for all types except for `long long` and `unsigned long long` then:

>     __has_feature(__atomic_exchange_seq_cst_b) == 1  // bool
>     __has_feature(__atomic_exchange_seq_cst_c) == 1  // char
>     __has_feature(__atomic_exchange_seq_cst_a) == 1  // signed char
>     __has_feature(__atomic_exchange_seq_cst_h) == 1  // unsigned char
>     __has_feature(__atomic_exchange_seq_cst_Ds) == 1 // char16_t
>     __has_feature(__atomic_exchange_seq_cst_Di) == 1 // char32_t
>     __has_feature(__atomic_exchange_seq_cst_w) == 1  // wchar_t
>     __has_feature(__atomic_exchange_seq_cst_s) == 1  // short
>     __has_feature(__atomic_exchange_seq_cst_t) == 1  // unsigned short
>     __has_feature(__atomic_exchange_seq_cst_i) == 1  // int
>     __has_feature(__atomic_exchange_seq_cst_j) == 1  // unsigned int
>     __has_feature(__atomic_exchange_seq_cst_l) == 1  // long
>     __has_feature(__atomic_exchange_seq_cst_m) == 1  // unsigned long
>     __has_feature(__atomic_exchange_seq_cst_Pv) == 1 // void*

Note that only the `__has_feature` flag is decorated with the argument type. The name of the compiler intrinsic is not decorated, but instead works like a C++ overloaded function.

Additionally there are other intrinsics besides `__atomic_exchange_seq_cst` and `__atomic_store_seq_cst`. They are optional. But if the compiler can generate faster code than provided by the library, then clients will benefit from the compiler writer’s expertise and knowledge of the targeted platform.

Below is the complete list of *sequentially consistent* intrinsics, and their library implementations. Template syntax is used to indicate the desired overloading for integral and void\* types. The template does not represent a requirement that the intrinsic operate on *any* type!

>     T is one of:  bool, char, signed char, unsigned char, short, unsigned short,
>                   int, unsigned int, long, unsigned long,
>                   long long, unsigned long long, char16_t, char32_t, wchar_t, void*
>
>     template <class T>
>     T
>     __atomic_load_seq_cst(T const volatile* obj)
>     {
>         unique_lock<mutex> _(some_mutex);
>         return *obj;
>     }
>
>     template <class T>
>     void
>     __atomic_store_seq_cst(T volatile* obj, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         *obj = desr;
>     }
>
>     template <class T>
>     T
>     __atomic_exchange_seq_cst(T volatile* obj, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj = desr;
>         return r;
>     }
>
>     template <class T>
>     bool
>     __atomic_compare_exchange_strong_seq_cst_seq_cst(T volatile* obj, T* exp, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         if (std::memcmp(const_cast<T*>(obj), exp, sizeof(T)) == 0)
>         {
>             std::memcpy(const_cast<T*>(obj), &desr, sizeof(T));
>             return true;
>         }
>         std::memcpy(exp, const_cast<T*>(obj), sizeof(T));
>         return false;
>     }
>
>     template <class T>
>     bool
>     __atomic_compare_exchange_weak_seq_cst_seq_cst(T volatile* obj, T* exp, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         if (std::memcmp(const_cast<T*>(obj), exp, sizeof(T)) == 0)
>         {
>             std::memcpy(const_cast<T*>(obj), &desr, sizeof(T));
>             return true;
>         }
>         std::memcpy(exp, const_cast<T*>(obj), sizeof(T));
>         return false;
>     }
>
>     T is one of:  char, signed char, unsigned char, short, unsigned short,
>                   int, unsigned int, long, unsigned long,
>                   long long, unsigned long long, char16_t, char32_t, wchar_t
>
>     template <class T>
>     T
>     __atomic_fetch_add_seq_cst(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj += operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_sub_seq_cst(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj -= operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_and_seq_cst(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj &= operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_or_seq_cst(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj |= operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_xor_seq_cst(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj ^= operand;
>         return r;
>     }
>
>     void*
>     __atomic_fetch_add_seq_cst(void* volatile* obj, ptrdiff_t operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         void* r = *obj;
>         (char*&)(*obj) += operand;
>         return r;
>     }
>
>     void*
>     __atomic_fetch_sub_seq_cst(void* volatile* obj, ptrdiff_t operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         void* r = *obj;
>         (char*&)(*obj) -= operand;
>         return r;
>     }
>
>     void __atomic_thread_fence_seq_cst()
>     {
>         unique_lock<mutex> _(some_mutex);
>     }
>
>     void __atomic_signal_fence_seq_cst()
>     {
>         unique_lock<mutex> _(some_mutex);
>     }

One should consult the (currently draft) [C++ standard](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2010/n3126.pdf) for the details of the definitions for these operations. For example `__atomic_compare_exchange_weak_seq_cst_seq_cst` is allowed to fail spuriously while `__atomic_compare_exchange_strong_seq_cst_seq_cst` is not.

If on your platform the lock-free definition of `__atomic_compare_exchange_weak_seq_cst_seq_cst` would be the same as `__atomic_compare_exchange_strong_seq_cst_seq_cst`, you may omit the `__atomic_compare_exchange_weak_seq_cst_seq_cst` intrinsic without a performance cost. The library will prefer your implementation of `__atomic_compare_exchange_strong_seq_cst_seq_cst` over its own definition for implementing `__atomic_compare_exchange_weak_seq_cst_seq_cst`. That is, the library will arrange for `__atomic_compare_exchange_weak_seq_cst_seq_cst` to call `__atomic_compare_exchange_strong_seq_cst_seq_cst` if you supply an intrinsic for the strong version but not the weak.

Taking advantage of weaker memory synchronization
-------------------------------------------------

So far all of the intrinsics presented require a *sequentially consistent* memory ordering. That is, no loads or stores can move across the operation (just as if the library had locked that internal mutex). But `<atomic>` supports weaker memory ordering operations. In all, there are six memory orderings (listed here from strongest to weakest):

>     memory_order_seq_cst
>     memory_order_acq_rel
>     memory_order_release
>     memory_order_acquire
>     memory_order_consume
>     memory_order_relaxed

(See the [C++ standard](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2010/n3126.pdf) for the detailed definitions of each of these orderings).

On some platforms, the compiler vendor can offer some or even all of the above intrinsics at one or more weaker levels of memory synchronization. This might lead for example to not issuing an `mfence` instruction on the x86.

If the compiler does not offer any given operation, at any given memory ordering level, the library will automatically attempt to call the next highest memory ordering operation. This continues up to `seq_cst`, and if that doesn’t exist, then the library takes over and does the job with a `mutex`. This is a compile-time search & selection operation. At run time, the application will only see the few inlined assembly instructions for the selected intrinsic.

Each intrinsic is appended with the 7-letter name of the memory ordering it addresses. For example a `load` with `relaxed` ordering is defined by:

>     T __atomic_load_relaxed(const volatile T* obj);

And announced with:

>     __has_feature(__atomic_load_relaxed_b) == 1  // bool
>     __has_feature(__atomic_load_relaxed_c) == 1  // char
>     __has_feature(__atomic_load_relaxed_a) == 1  // signed char
>     ...

The `__atomic_compare_exchange_strong(weak)` intrinsics are parameterized on two memory orderings. The first ordering applies when the operation returns `true` and the second ordering applies when the operation returns `false`.

Not every memory ordering is appropriate for every operation. `exchange` and the `fetch_op` operations support all 6. But `load` only supports `relaxed`, `consume`, `acquire` and `seq_cst`. `store` only supports `relaxed`, `release`, and `seq_cst`. The `compare_exchange` operations support the following 16 combinations out of the possible 36:

>     relaxed_relaxed
>     consume_relaxed
>     consume_consume
>     acquire_relaxed
>     acquire_consume
>     acquire_acquire
>     release_relaxed
>     release_consume
>     release_acquire
>     acq_rel_relaxed
>     acq_rel_consume
>     acq_rel_acquire
>     seq_cst_relaxed
>     seq_cst_consume
>     seq_cst_acquire
>     seq_cst_seq_cst

Again, the compiler supplies intrinsics only for the strongest orderings where it can make a difference. The library takes care of calling the weakest supplied intrinsic that is as strong or stronger than the customer asked for.
