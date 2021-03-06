    All failures in the libc++ test suite will be documented here. Last
    run was with Clang (pre-3.2) on Debian unstable x86_64 with eglibc
    2.13 and kernel 3.2.0-3-amd64. The ABI library used was libc++abi.

    depr/
     depr.c.headers/
      math_h.pass.cpp: Fails a static assert that the return type of
       isnan(double) and isinf(double) is a bool.
     uchar_h.pass.cpp:
       My libc doesn't seem to provide uchar.h yet.
     exception.unexpected/
      set.unexpected/
       get_unexpected.pass.cpp: This seems to be a problem with libc++abi:
        its default unexpected handler does not call the terminate handler?
       set_unexpected.pass.cpp: idem.
    diagnostics/
     syserr/
      syserr.errcat/
       syserr.errcat.objects/
        system_category.pass.cpp: Always maps back to generic category
         when it should stay system category, because the implementation
         dependson ELAST, which Linux lacks.
    input.output/
     iostream.format/
      ext.manip/
       get_time.pass.cpp: Local representation is 'Sat 31 Dec 2061
        11:55:59 PM EST' which does not match the expected result in the
        test.
       put_time.pass.cpp: idem.
    language.support/
     support.start.term/
      quick_exit.pass.cpp: Fails because it doesn't know about
       std::at_quick_exit. Interestingly my libc does seem to know about
       std::[at_]quick_exit, so this needs some investigation.
    localization/
     locale.categories/
      category.collate/
       locale.collate.byname/
        compare.pass.cpp: In the C local, sorting order seems OK, but not
         in the "" and en UTF8 locals. Needs investigation.
      category.ctype/
       locale.codecvt/
        locale.codecvt.members/
         wchar_t_out.pass.cpp: Needs investigation.
        widen_1.pass.cpp: Fails due to not converting some out of bounds
         characters the same way as expected. Needs investigation.
        widen_many.pass.cpp: idem.
      category.monetary/
       locale.money.get/
        locale.money.get.members/
         get_long_double_ru_RU.pass.cpp: Needs investigation.
         get_long_double_zh_CN.pass.cpp: idem.
        locale.money.put.members/
         put_long_double_ru_RU.pass.cpp: idem.
         put_long_double_zh_CN.pass.cpp: idem.
       locale.moneypunct.byname/
        decimal_point.pass.cpp: Expects ',' for RU, but gets '.'.
        thousands_sep.pass.cpp: idem.
      category.numeric/
       locale.nm.put/
        facet.num.put.members/
         put_long_double.pass.cpp: Fails due to getting '+nan' rather
          than just 'nan'.
      category.time/
       locale.time.get.byname/
        get_date.pass.cpp: Needs investigation.
        get_date_wide.pass.cpp: idem.
        get_monthname.pass.cpp: idem.
        get_monthname_wide.pass.cpp: idem.
        get_one.pass.cpp: idem.
        get_one_wide.pass.cpp: idem.
        get_weekday.pass.cpp: idem.
        get_weekday_wide.pass.cpp: idem.
       locale.time.put.byname/
        put1.pass.cpp: idem.
       locale.time.put/
        locale.time.put.members/
         put2.pass.cpp: idem.
      facet.numpunct/
       locale.numpunct.byname/
        grouping.pass.cpp: idem.
        thousands_sep.pass.cpp: idem.
    numerics/
     c.math/
      cmath.pass.cpp: Fails for same reason as depr/depr.c.headers/math_h.pass.cpp
    re/
     re.alg/
      re.alg.match/
       awk.pass.cpp: Needs investigation.
       basic.pass.cpp: idem.
       ecma.pass.cpp: idem.
       extended.pass.cpp: idem.
      re.alg.search/
       awk.pass.cpp: idem.
       basic.pass.cpp: idem.
       ecma.pass.cpp: idem.
       extended.pass.cpp: idem.
     re.traits/
      lookup_collatename.pass.cpp: idem.
    strings/
     c.strings/
      cuchar.pass.cpp: Can't find cuchar header
      version_cuchar.pass.cpp: idem.
    utilities/
     memory/
      unique.ptr/
       unique.ptr.runtime/
        unique.ptr.runtime.ctor/
         default02.pass.cpp:
          test previously passed, recently started crashing clang. Needs investigation.
         pointer02.pass.cpp: idem.
