[LLVM Home](http://llvm.org/)

libc++ Info [About](/index.html)

Quick Links [cfe-dev](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-dev) [cfe-commits](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-commits) [Bug Reports](http://llvm.org/bugs/) [Browse SVN](http://llvm.org/svn/llvm-project/libcxx/trunk/) [Browse ViewVC](http://llvm.org/viewvc/llvm-project/libcxx/trunk/)

&lt;atomic&gt; design
=====================

The compiler supplies all of the intrinsics as described below. This list of intrinsics roughly parallels the requirements of the C and C++ atomics proposals. The C and C++ library imlpementations simply drop through to these intrinsics. Anything the platform does not support in hardware, the compiler arranges for a (compiler-rt) library call to be made which will do the job with a mutex, and in this case ignoring the memory ordering parameter (effectively implementing `memory_order_seq_cst`).

Ultimate efficiency is preferred over run time error checking. Undefined behavior is acceptable when the inputs do not conform as defined below.

>     // In every intrinsic signature below, type* atomic_obj may be a pointer to a
>     //    volatile-qualifed type.
>     // Memory ordering values map to the following meanings:
>     //   memory_order_relaxed == 0
>     //   memory_order_consume == 1
>     //   memory_order_acquire == 2
>     //   memory_order_release == 3
>     //   memory_order_acq_rel == 4
>     //   memory_order_seq_cst == 5
>
>     // type must be trivially copyable
>     // type represents a "type argument"
>     bool __atomic_is_lock_free(type);
>
>     // type must be trivially copyable
>     // Behavior is defined for mem_ord = 0, 1, 2, 5
>     type __atomic_load(const type* atomic_obj, int mem_ord);
>
>     // type must be trivially copyable
>     // Behavior is defined for mem_ord = 0, 3, 5
>     void __atomic_store(type* atomic_obj, type desired, int mem_ord);
>
>     // type must be trivially copyable
>     // Behavior is defined for mem_ord = [0 ... 5]
>     type __atomic_exchange(type* atomic_obj, type desired, int mem_ord);
>
>     // type must be trivially copyable
>     // Behavior is defined for mem_success = [0 ... 5],
>     //   mem_failure <= mem_success
>     //   mem_failure != 3
>     //   mem_failure != 4
>     bool __atomic_compare_exchange_strong(type* atomic_obj,
>                                           type* expected, type desired,
>                                           int mem_success, int mem_failure);
>
>     // type must be trivially copyable
>     // Behavior is defined for mem_success = [0 ... 5],
>     //   mem_failure <= mem_success
>     //   mem_failure != 3
>     //   mem_failure != 4
>     bool __atomic_compare_exchange_weak(type* atomic_obj,
>                                         type* expected, type desired,
>                                         int mem_success, int mem_failure);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     // Behavior is defined for mem_ord = [0 ... 5]
>     type __atomic_fetch_add(type* atomic_obj, type operand, int mem_ord);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     // Behavior is defined for mem_ord = [0 ... 5]
>     type __atomic_fetch_sub(type* atomic_obj, type operand, int mem_ord);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     // Behavior is defined for mem_ord = [0 ... 5]
>     type __atomic_fetch_and(type* atomic_obj, type operand, int mem_ord);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     // Behavior is defined for mem_ord = [0 ... 5]
>     type __atomic_fetch_or(type* atomic_obj, type operand, int mem_ord);
>
>     // type is one of: char, signed char, unsigned char, short, unsigned short, int,
>     //      unsigned int, long, unsigned long, long long, unsigned long long,
>     //      char16_t, char32_t, wchar_t
>     // Behavior is defined for mem_ord = [0 ... 5]
>     type __atomic_fetch_xor(type* atomic_obj, type operand, int mem_ord);
>
>     // Behavior is defined for mem_ord = [0 ... 5]
>     void* __atomic_fetch_add(void** atomic_obj, ptrdiff_t operand, int mem_ord);
>     void* __atomic_fetch_sub(void** atomic_obj, ptrdiff_t operand, int mem_ord);
>
>     // Behavior is defined for mem_ord = [0 ... 5]
>     void __atomic_thread_fence(int mem_ord);
>     void __atomic_signal_fence(int mem_ord);

If desired the intrinsics taking a single `mem_ord` parameter can default this argument to 5.

If desired the intrinsics taking two ordering parameters can default `mem_success` to 5, and `mem_failure` to `translate_memory_order(mem_success)` where `translate_memory_order(mem_success)` is defined as:

>     int
>     translate_memory_order(int o)
>     {
>         switch (o)
>         {
>         case 4:
>             return 2;
>         case 3:
>             return 0;
>         }
>         return o;
>     }

Below are representative C++ implementations of all of the operations. Their purpose is to document the desired semantics of each operation, assuming `memory_order_seq_cst`. This is essentially the code that will be called if the front end calls out to compiler-rt.

>     template <class T>
>     T
>     __atomic_load(T const volatile* obj)
>     {
>         unique_lock<mutex> _(some_mutex);
>         return *obj;
>     }
>
>     template <class T>
>     void
>     __atomic_store(T volatile* obj, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         *obj = desr;
>     }
>
>     template <class T>
>     T
>     __atomic_exchange(T volatile* obj, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj = desr;
>         return r;
>     }
>
>     template <class T>
>     bool
>     __atomic_compare_exchange_strong(T volatile* obj, T* exp, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         if (std::memcmp(const_cast<T*>(obj), exp, sizeof(T)) == 0) // if (*obj == *exp)
>         {
>             std::memcpy(const_cast<T*>(obj), &desr, sizeof(T)); // *obj = desr;
>             return true;
>         }
>         std::memcpy(exp, const_cast<T*>(obj), sizeof(T)); // *exp = *obj;
>         return false;
>     }
>
>     // May spuriously return false (even if *obj == *exp)
>     template <class T>
>     bool
>     __atomic_compare_exchange_weak(T volatile* obj, T* exp, T desr)
>     {
>         unique_lock<mutex> _(some_mutex);
>         if (std::memcmp(const_cast<T*>(obj), exp, sizeof(T)) == 0) // if (*obj == *exp)
>         {
>             std::memcpy(const_cast<T*>(obj), &desr, sizeof(T)); // *obj = desr;
>             return true;
>         }
>         std::memcpy(exp, const_cast<T*>(obj), sizeof(T)); // *exp = *obj;
>         return false;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_add(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj += operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_sub(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj -= operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_and(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj &= operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_or(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj |= operand;
>         return r;
>     }
>
>     template <class T>
>     T
>     __atomic_fetch_xor(T volatile* obj, T operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         T r = *obj;
>         *obj ^= operand;
>         return r;
>     }
>
>     void*
>     __atomic_fetch_add(void* volatile* obj, ptrdiff_t operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         void* r = *obj;
>         (char*&)(*obj) += operand;
>         return r;
>     }
>
>     void*
>     __atomic_fetch_sub(void* volatile* obj, ptrdiff_t operand)
>     {
>         unique_lock<mutex> _(some_mutex);
>         void* r = *obj;
>         (char*&)(*obj) -= operand;
>         return r;
>     }
>
>     void __atomic_thread_fence()
>     {
>         unique_lock<mutex> _(some_mutex);
>     }
>
>     void __atomic_signal_fence()
>     {
>         unique_lock<mutex> _(some_mutex);
>     }
