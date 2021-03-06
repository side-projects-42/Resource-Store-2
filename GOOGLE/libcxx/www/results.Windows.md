    All failures in the libc++ test suite will be documented here.

    Last run was with Clang (pre-3.1) and GCC 4.6.3 (with dw2 exception handling) and
     mingw-w64 v2.0.3 on i686-w64-mingw32.

    The following line was added to ./lib/buildit to make a static libc++ library because a DLL requires "declspec(dllexport)" or a .def file:
    ar rcs libc++.a *.o
    I also deleted libc++.dll and libc++.dll.a to make sure libc++ was linked statically to prevent unrelated issues from contaminating the test results.
    The commands to build and test were (-nodefaultlibs does not work, lots of MinGW related stuff gets left out resulting in linker failures):
    TRIPLE=i686-w64-mingw32 ./buildit
    TRIPLE=i686-w64-mingw32 HEADER_INCLUDE="-I/home/Ruben/libcxx/include" LIBS="-L/home/ruben/libcxx/lib -lc++ -lpthread -lsupc++ -lmsvcr100 -Wl,--allow-multiple-definition" ./testit > test.log 2>&1

    Note: Some locale tests may "Need investigating", but I think most problems are
          caused by wrong/unportable locale naming in the tests.
    Note: Some tests failed to link because "test.exe" was still running when ld.exe
          tried to link the next test. I left these failures out of the list; they
          account for about 10-30 failures, and are counted in the total scores below.
          I reran some of these failures manually and they passed.
    Note: Some tests fail at runtime but pass when run manually. Usage of std::cout
          segfaults so further investigation is difficult. These also contribute to
          the failures total, but are left out of the failure list, as the cause is
          probably not located in that part of libc++, not locatable due to the lack
          of usable debug info generated by Clang at this time.

    TOTAL RESULTS:
    Section failures / total sections: 104 / 1064 = 9.8% failures
    Test failures / total number of tests: 292 / 4326 = 6.7% failures

    depr/
     depr.c.headers/
      inttypes_h.pass.cpp: missing macros for C++.
      uchar_h.pass.cpp: bug in mingw-w64 headers for C++11 builtin char types.
      wchar_h.pass.cpp: Windows does not have swprintf, should use _snwprintf.
                        Suggest #define swprintf as _snwprintf for _WIN32.
    exception.unexpected/
       set.unexpected/
        get_unexpected.pass.cpp: Segmentation fault - needs investigation.
        set_unexpected.pass.cpp: idem.
    diagnostics/
     syserr/
      syserr.errcat/
       syserr.errcat.objects/
        system_category.pass.cpp: Needs investigation.
    input.output/
     file.streams/
      c.files/
       cinttypes.pass.cpp: missing macros for C++.
      fstreams/
       filebuf.assign/
        member_swap.pass.cpp: Segmentation fault - needs investigation.
        move_assign.pass.cpp: idem.
        nonmember_swap.pass.cpp: idem.
       filebuf.cons/
        move.pass.cpp: idem.
       filebuf.members/
        open_pointers.pass.cpp: idem.
       filebuf.virtuals/
        overflow.pass.cpp: idem.
        pbackfail.pass.cpp: idem.
        seekoff.pass.cpp: idem.
        underflow.pass.cpp: idem.
       fstream.assign/
        member_swap.pass.cpp: idem.
        move_assign.pass.cpp: idem.
        nonmember_swap.pass.cpp: idem.
       fstream.cons/
        move.pass.cpp: idem.
        pointer.pass.cpp: idem.
        string.pass.cpp: idem.
       fstream.members/
        open_pointer.pass.cpp: idem.
        open_string.pass.cpp: idem.
       ifstream.assign/
        member_swap.pass.cpp: idem.
        move_assign.pass.cpp: idem.
        nonmember_swap.pass.cpp: idem.
       ifstream.cons/
        move.pass.cpp: idem.
        pointer.pass.cpp: idem.
        string.pass.cpp: idem.
       ifstream.members/
        open_pointer.pass.cpp: idem.
        open_string.pass.cpp: idem.
          rdbuf.pass.cpp: idem.
       ofstream.assign/
        member_swap.pass.cpp: idem.
        move_assign.pass.cpp: idem.
        nonmember_swap.pass.cpp: idem.
       ofstream.cons/
        move.pass.cpp: idem.
        pointer.pass.cpp: idem.
        string.pass.cpp: idem.
       ofstream.members/
        open_pointer.pass.cpp: idem.
        open_string.pass.cpp: idem.
          rdbuf.pass.cpp: idem.
     iostream.format/
      ext.manip
       get_money.pass.cpp: Windows locale names don't follow UNIX convention.
       get_time.pass.cpp: idem.
       put_money.pass.cpp: idem.
       put_time.pass.cpp: idem.
      output.streams/
       ostream.formatted/
        ostream.inserters.arithmetic/
         long_double.pass.cpp: Segfault - needs investigation.
         pointer.pass.cpp: idem.
       ostream_sentry/
        destruct.pass.cpp: idem.
     iostream.objects/
      narrow.stream.objects/
       cerr.pass.cpp: idem.
       cin.pass.cpp: idem.
      wide.stream.objects/
       wcerr.pass.cpp: idem.
       wcin.pass.cpp: idem.
     iostreams.base/
      ios/
       basic.ios.members/
        copyfmt.pass.cpp: Windows locale names don't follow UNIX convention.
        imbue.pass.cpp: idem.
        move.pass.cpp: idem.
        swap.pass.cpp: Windows locale names don't follow UNIX convention.
      ios.base/
       ios.base.callback/
        register_callback.pass.cpp: Windows locale names don't follow UNIX convention.
       ios.base.locales/
        imbue.pass.cpp: Windows locale names don't follow UNIX convention.
     stream.buffers/
      streambuf/
       streambuf.cons/
        copy.pass.cpp: Windows locale names don't follow UNIX convention.
        default.pass.cpp: idem.
       streambuf.members/
        streambuf.buffer/
         locales.pass.cpp: Windows locale names don't follow UNIX convention.
       streambuf.protected/
        streambuf.assign/
           assign.pass.cpp: Windows locale names don't follow UNIX convention.
         swap.pass.cpp: idem.
    language.support/
     support.exception/
      except.nested/
       assign.pass.cpp: Needs investigation.
       ctor_copy.pass.cpp: idem.
       ctor_default.pass.cpp: idem.
       rethrow_if_nested.pass.cpp: idem.
       rethrow_nested.pass.cpp: idem.
       throw_with_nested.pass.cpp: idem.
      propagation/
       current_exception.pass.cpp: Needs investigation.
       exception_ptr.pass.cpp: idem.
       make_exception_ptr.pass.cpp: idem.
       rethrow_exception.pass.cpp: idem.
      uncaught/
       uncaught_exception.pass.cpp: Needs investigation.
     support.limits/
      limits/
       numeric.limits.members/
        digits.pass.cpp: Needs investigation (wrong assumptions?).
        digits10.pass.cpp: idem.
     support.runtime/
      support.start.term/
       quick_exit.pass.cpp: Not declared in libc++ headers. Is it from the ABI lib?
     support.types/
      max_align_t.pass.cpp: needs investigation (wrong assumptions?).
    localization/
     locale.categories/
      category.collate/
       locale.collate.byname/
        compare.pass.cpp: Windows locale names don't follow UNIX convention.
        hash.pass.cpp: idem.
        transform.pass.cpp: getenv should be replaced by putenv for portability.
                            Windows locale names don't follow UNIX convention.
        types.pass.cpp: Windows locale names don't follow UNIX convention.
     locale.categories/
      category.ctype/
       locale.codecvt/
        locale.codecvt.members/
         wchar_t_in.pass.cpp: Most likely wchar_t is assumed 4 bytes.
         wchar_t_length.pass.cpp: idem.
         wchar_t_out.pass.cpp: idem.
         wchar_t_unshift.pass.cpp: idem.
       locale.codecvt.byname/
        ctor_wchar_t.pass.cpp: Windows locale names don't follow UNIX convention.
       locale.ctype.byname/
        is_1.pass.cpp: Windows locale names don't follow UNIX convention.
        is_many.pass.cpp: idem.
        narrow_1.pass.cpp: idem.
        narrow_many.pass.cpp: idem.
        scan_is.pass.cpp: idem.
        scan_not.pass.cpp: idem.
        tolower_1.pass.cpp: idem.
        tolower_many.pass.cpp: idem.
        toupper_1.pass.cpp: idem.
        toupper_many.pass.cpp: idem.
        types.pass.cpp: idem.
        widen_1.pass.cpp: idem.
        widen_many.pass.cpp: idem.
      category.monetary/
       locale.money.get/
        locale.money.get.members/
         get_long_double_en_US.pass.cpp: Windows locale names don't follow UNIX convention.
         get_long_double_fr_FR.pass.cpp: idem.
         get_long_double_ru_RU.pass.cpp: idem.
         get_long_double_zh_CN.pass.cpp: idem.
         get_string_en_US.pass.cpp: idem.
       locale.money.put/
        locale.money.put.members/
         put_long_double_en_US.pass.cpp: Windows locale names don't follow UNIX convention.
         put_long_double_fr_FR.pass.cpp: idem.
         put_long_double_ru_RU.pass.cpp: idem.
         put_long_double_zh_CN.pass.cpp: idem.
         put_string_en_US.pass.cpp: idem.
       locale.moneypunct.byname/
         curr_symbol.pass.cpp: Failed constructing from C locale. Needs investigation.
         decimal_point.pass.cpp: idem.
         frac_digits.pass.cpp: idem.
         grouping.pass.cpp: idem.
         neg_format.pass.cpp: idem.
         negative_sign.pass.cpp: idem.
         pos_format.pass.cpp: idem.
         positive_sign.pass.cpp: idem.
         thousands_sep.pass.cpp: idem.
      category.numeric/
       locale.nm.put/
        facet.num.put.members/
         put_double.pass.cpp: idem. (different floating point format?)
         put_long_double.pass.cpp: idem.
         put_pointer.pass.cpp: idem.
       locale.num.get/
        facet.num.get.members/
         get_double.pass.cpp: Needs investigating.
         get_float.pass.cpp: idem.
         get_long_double.pass.cpp: idem.
         get_pointer.pass.cpp: idem.
      category.time/
       locale.time.get/
        locale.time.get.byname/
         date_order.pass.cpp: Windows locale names don't follow UNIX convention.
         date_order_wide.pass.cpp: idem.
         get_date.pass.cpp: idem.
         get_date_wide.pass.cpp: idem.
         get_monthname.pass.cpp: idem.
         get_monthname_wide.pass.cpp: idem.
         get_one.pass.cpp: idem.
         get_one_wide.pass.cpp: idem.
         get_time.pass.cpp: idem.
         get_time_wide.pass.cpp: idem.
         get_weekday.pass.cpp: idem.
         get_weekday_wide.pass.cpp: idem.
         get_year.pass.cpp: idem.
         get_year_wide.pass.cpp: idem.
       locale.time.put/
        locale.time.put.members/
         put1.pass.cpp: Needs investigating.
         put2.pass.cpp: idem.
        locale.time.put.byname/
         put1.pass.cpp: Windows locale names don't follow UNIX convention.
       facet.numpunct/
        locale.numpunct/
         locale.numpunct.byname/
          decimal_point.pass.cpp: Failed constructing from C locale. Needs investigation.
          grouping.pass.cpp: idem.
          thousands_sep.pass.cpp: idem.
     locale.stdcvt/
      codecvt_utf16_in.pass.cpp: 0x40003 does not fit in a 2-byte wchar_t.
      codecvt_utf16_out.pass.cpp: idem.
      codecvt_utf8_in.pass.cpp: idem.
      codecvt_utf8_out.pass.cpp: idem.
      codecvt_utf8_utf16_in.pass: idem.
      codecvt_utf8_utf16_out.pass.cpp: idem.
     locales/
      locale/
       locale.cons/
        assign.pass.cpp: Windows locale names don't follow UNIX convention.
        char_pointer.pass.cpp: idem.
        copy.pass.cpp: idem.
        default.pass.cpp: idem.
        locale_char_pointer_cat.pass.cpp: idem.
        locale_facetptr.pass.cpp: idem.
        locale_locale_cat.pass.cpp: idem.
        locale_string_cat.pass.cpp: idem.
        string.pass.cpp: idem.
       locale.members/
        name.pass.cpp: Windows locale names don't follow UNIX convention.
       locale.operators/
        eq.pass.cpp: Windows locale names don't follow UNIX convention.
       locale/locale.statics/
        classic.pass.cpp: Failed constructing from C locale. Needs investigation.
        global.pass.cpp: Windows locale names don't follow UNIX convention.
       locale.convenience/
        conversions/
         conversions.buffer/
          overflow.pass.cpp: Needs investigation.
          pbackfail.pass.cpp: idem.
          seekoff.pass.cpp: idem.
          test.pass.cpp: idem.
          underflow.pass.cpp: idem.
         conversions.string/
          converted.pass.cpp: out of range hex sequence due to 2-byte wchar_t.
          from_bytes.pass.cpp: idem (This test passed while it probably shouldn't!).
          to_bytes.pass.cpp: idem.
    numerics/
     complex.number/
      complex.value.ops/
       abs.pass.cpp: Failed assertion.
       arg.pass.cpp: idem.
     rand/
      rand.device/
       ctor.pass.cpp: No such thing as /dev/urandom on Windows. Need alternative.
       entropy.pass.cpp: idem.
       eval.pass.cpp: idem.
      rand.dis/
       rand.dist.bern/
        rand.dist.bern.bernoulli/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.bern.bin/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.bern.geo/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.bern.negbin/
         io.pass.cpp: Needs investigation. (different output double format?)
       rand.dist.norm/
          rand.dist.norm.cauchy/
         io.pass.cpp: Needs investigation. (different output double format?)
          rand.dist.norm.chisq/
         io.pass.cpp: Needs investigation. (different output double format?)
          rand.dist.norm.norm.f/
         io.pass.cpp: Needs investigation. (different output double format?)
          rand.dist.norm.lognormal/
         io.pass.cpp: Needs investigation. (different output double format?)
          rand.dist.norm.normal/
         io.pass.cpp: Needs investigation. (different output double format?)
          rand.dist.norm.t/
         io.pass.cpp: Needs investigation. (different output double format?)
       rand.dist.pois/
        rand.dist.pois.exp/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.pois.extreme/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.pois.gamma/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.pois.poisson/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.pois.weibull/
         io.pass.cpp: Needs investigation. (different output double format?)
       rand.dist.samp/
        rand.dist.samp.discrete/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.samp.pconst/
         io.pass.cpp: Needs investigation. (different output double format?)
        rand.dist.samp.plinear/
         io.pass.cpp: Needs investigation. (different output double format?)
       rand.dist.uni/
        rand.dist.uni.real/
         io.pass.cpp: Needs investigation. (different output double format?)
    re/
     re.alg/
      re.alg.match/
       awk.pass.cpp: Needs investigation.
       basic.pass.cpp: idem.
       ecma.pass.cpp: idem.
       extended.pass.cpp: idem.
      re.alg.search/
       awk.pass.cpp: Needs investigation.
       basic.pass.cpp: idem.
       ecma.pass.cpp: idem.
       extended.pass.cpp: idem.
     re.regex/
      re.regex.locale/
       imbue.pass.cpp: Windows locale names don't follow UNIX convention.
     re.traits/
      default.pass.cpp: Windows locale names don't follow UNIX convention.
      getloc.pass.cpp: idem.
      imbue.pass.cpp: idem.
      isctype.pass.cpp: Needs investigation.
      lookup_classname.pass.cpp: idem.
      lookup_collatename.pass.cpp: Windows locale names don't follow UNIX convention.
      transform.pass.cpp: idem.
      transform_primary.pass.cpp: idem
      translate_nocase.pass.cpp: Needs investigation.
    strings/
     c.strings/
      cuchar.pass.cpp: see previous note about uchar.h.
      cwchar.pass.cpp: I suggest including the win32 support header which defines
                       (v)swprintf to the Windows equivalent.
      version_cuchar.pass.cpp: see previous note about uchar.h.
     string.conversions/
      stod.pass.cpp: "no conversion". Needs investigation.
      stof.pass.cpp: idem.
      to_string.pass.cpp: Needs investigation.
      to_wstring.pass.cpp: idem.
    thread/
     futures/
      futures.async/
       async.pass.cpp: Needs investigation.
      futures.promise/
       alloc_ctor.pass.cpp: Needs investigation.
       default.pass.cpp: idem.
       dtor.pass.cpp: idem.
       get_future.pass.cpp: idem.
       move_assign.pass.cpp: idem.
       move_ctor.pass.cpp: idem.
       set_exception.pass.cpp: idem.
       set_exception_at_thread_exit.pass.cpp: idem.
       set_lvalue.pass.cpp: idem.
       set_lvalue_at_thread_exit.pass.cpp: idem.
       set_rvalue.pass.cpp: idem.
       set_rvalue_at_thread_exit.pass.cpp: idem.
       set_value_at_thread_exit_const.pass.cpp: idem.
       set_value_at_thread_exit_void.pass.cpp: idem.
       set_value_const.pass.cpp: idem.
       set_value_void.pass.cpp: idem.
       swap.pass.cpp: idem.
      futures.shared_future/
       copy_assign.pass.cpp: Needs investigation.
       copy_ctor.pass.cpp: idem.
       ctor_future.pass.cpp: idem.
       dtor.pass.cpp: idem.
       get.pass.cpp: idem.
       move_assign.pass.cpp: idem.
       move_ctor.pass.cpp: idem.
       wait.pass.cpp: idem.
       wait_for.pass.cpp: idem.
       wait_until.pass.cpp: idem.
      futures.tas/
       futures.task.members/
        assign_move.pass.cpp: Needs investigation.
        ctor_func.pass.cpp: idem.
        ctor_func_alloc.pass.cpp: idem.
        ctor_move.pass.cpp: idem.
        dtor.pass.cpp: idem.
        get_future.pass.cpp: idem.
        make_ready_at_thread_exit.pass.cpp: idem.
        operator.pass.cpp: idem.
        reset.pass.cpp: idem.
        swap.pass.cpp: idem.
       futures.task.nonmembers/
        swap.pass.cpp: Needs investigation.
       futures.unique_future/
        dtor.pass.cpp: Needs investigation.
        get.pass.cpp: idem.
        move_assign.pass.cpp: idem.
        move_ctor.pass.cpp: idem.
        share.pass.cpp: idem.
        wait.pass.cpp: idem.
        wait_for.pass.cpp: idem.
        wait_until.pass.cpp: idem.
     thread.condition/
      thread.condition.condvar/
       wait_for.pass.cpp: Needs investigation.
      thread.condition.condvarany/
       wait_for.pass.cpp: Needs investigation.
     thread.mutex/
      thread.lock/
       thread.lock.unique/
        thread.lock.unique.cons/
         mutex_try_to_lock.pass.cpp: Needs investigation.
     thread.threads/
      thread.thread.class/
       thread.thread.constr/
        move.pass.cpp: Needs investigation.
       thread.thread.id/
        join.pass.cpp: Needs investigation.
       thread.thread.static/
        hardware_concurrency.pass.cpp: Needs investigation.
    utilities/
     meta/
      meta.trans/
       meta.trans.other/
        aligned_storage.pass.cpp: Probably due to sizeof(long) != 8.
       meta.trans.sign/
        make_signed.pass.cpp: Probably due to sizeof(wchar_t) != 4.
        make_unsigned.pass.cpp: idem.
       meta.unary.prop.query/
        alignment_of.pass.cpp: Probably a Clang problem on Windows.
