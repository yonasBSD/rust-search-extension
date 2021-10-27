var labelsIndex=[["A-allocators","Area: Custom and system allocators"],["A-array","Area: [T; N]"],["A-associated-items","Area: Associated items such as associated types and consts."],["A-async-await","Area: Async & Await"],["A-attributes","Area: #[attributes(..)]"],["A-borrow-checker","Area: The borrow checker"],["A-catch","Area: `do catch { .. }` expressions"],["A-clippy","Area: Clippy"],["A-closures","Area: closures (`|args| { .. }`)"],["A-code-coverage","Area: Source-based code coverage (-Zinstrument-coverage)"],["A-codegen","Area: Code generation"],["A-coercions","Area: implicit and explicit `expr as Type` coercions"],["A-collections","Area: std::collections."],["A-concurrency","Area: Concurrency related issues."],["A-const-eval","Area: constant evaluation (mir interpretation)"],["A-const-fn","Area: const fn foo(..) {..}. Pure functions which can be applied at compile time."],["A-const-generics","Area: const generics (parameters and arguments)"],["A-contributor-roadblock","Area: Makes things more difficult for new contributors to rust itself"],["A-control-flow","Area: Relating to control flow"],["A-cranelift","Things relevant to the [future] cranelift backend"],["A-cross","Area: Cross compilation"],["A-cross-crate-reexports","Area: Documentation that has been re-exported from a different crate"],["A-debuginfo","Area: Debugging information in compiled programs (DWARF, PDB, etc.)"],["A-destructors","Area: destructors (Drop, ..)"],["A-diagnostics","Area: Messages for errors, warnings, and lints"],["A-doc-alias","Area: #[doc(alias)]"],["A-doc-coverage","Area: Calculating how much of a crate has documentation"],["A-docs","Area: documentation for any part of the project, including the compiler, standard library, and tools"],["A-doctests","Area: Documentation tests, run by rustdoc"],["A-driver","Area: rustc_driver that ties everything together into the `rustc` compiler"],["A-dst","Area: Dynamically Sized Types"],["A-edition-2018-lints","Area: lints supporting the 2018 edition"],["A-edition-2021","Area: The 2021 edition"],["A-error-codes","Area: Explanation of an error code (--explain)"],["A-error-handling","Area: Error handling"],["A-exhaustiveness-checking","Relating to exhaustiveness / usefulness checking of patterns"],["A-ffi","Area: Foreign Function Interface (FFI)"],["A-floating-point","Area: Floating point numbers and arithmetic"],["A-fmt","Area: std::fmt"],["A-frontend","Area: frontend (errors, parsing and HIR)"],["A-gcc","Things relevant to the [future] GCC backend"],["A-generators","Area: Generators"],["A-github-actions",""],["A-grammar","Area: The grammar of Rust"],["A-HAIR","Relating to the HAIR IR."],["A-hir","Area: the High level Intermediate Representation (HIR)"],["A-impl-trait","Area: impl Trait. Universally / existentially quantified anonymous types with static dispatch."],["A-incr-comp","Area: Incremental compilation"],["A-inference","Area: Type inference"],["A-inline-assembly","Area: inline asm!(..)"],["A-intra-doc-links","Area: Intra-doc links, the ability to link to items in docs by name"],["A-intrinsics","Area: intrinsics"],["A-io","Area: std::io, std::fs and std::net"],["A-iterators","Area: Iterators"],["A-lang-item","Area: lang items"],["A-layout","Area: Memory layout of types"],["A-lazy-normalization","Area: lazy normalization (tracking issue: #60471)"],["A-libtest","Area: #[test] related"],["A-lifetimes","Area: lifetime related"],["A-linkage","Area: linking into static, shared libraries and binaries"],["A-lint","Area: Lints (warnings about flaws in source code) such as unused_mut."],["A-LLVM","Area: Code generation parts specific to LLVM. Both correctness bugs and optimization-related issues."],["A-lto","Area: Link Time Optimization"],["A-macros","Area: All kinds of macros (custom derive, macro_rules!, proc macros, ..)"],["A-macros-1.2","Issues which affect macros 1.2"],["A-macros-2.0","Area: declarative macros 2.0, https://github.com/rust-lang/rust/issues/39412"],["A-markdown-parsing","Area: Markdown parsing for doc-comments"],["A-meta","Area: Issues about the rust-lang/rust repository."],["A-metadata","Area: crate metadata"],["A-mir","Area: Mid-level IR (MIR) - https://blog.rust-lang.org/2016/04/19/MIR.html"],["A-mir-opt","Area: MIR optimizations"],["A-mir-opt-inlining","Area: MIR inlining"],["A-mir-opt-nrvo","Fixed by NRVO"],["A-mir-validate","Area: MIR validator (-Z validate-mir)"],["A-miri","Area: The miri tool"],["A-naked","Area: #[naked], prologue and epilogue-free, functions, https://git.io/vAzzS"],["A-NLL","Area: Non Lexical Lifetimes (NLL)"],["A-parallel-queries","Area: Parallel query execution"],["A-parser","Area: The parsing of Rust source code to an AST."],["A-patterns","Relating to patterns and pattern matching"],["A-pin","Area: Pin"],["A-plugin","Area: compiler plugins, doc.rust-lang.org/nightly/unstable-book/language-features/plugin.html"],["A-polymorphization","Area: Polymorphization"],["A-pretty","Area: Pretty printing."],["A-proc-macro-back-compat","Area: Backwards compatibility hacks for proc macros -s"],["A-proc-macros","Area: Procedural macros"],["A-query-system","Area: The rustc query system (https://rustc-dev-guide.rust-lang.org/query.html)"],["A-raw-pointers","Area: raw pointers, MaybeUninit, NonNull"],["A-reproducibility","Area: Reproducible / Deterministic builds"],["A-resolve","Area: Path resolution"],["A-result-option","Area: Result and Option combinators"],["A-rls","Area: Rust Language Server (RLS)"],["A-runtime","Area: The standard library's runtime (backtraces, unwinding, stack overflow detection)"],["A-rust-2018-preview","Area: The 2018 edition preview"],["A-rustbuild","Area: Rust's build system (x.py and bootstrap)"],["A-rustdoc-js","Area: Rustdoc's front-end"],["A-rustdoc-json","Area: Rustdoc JSON backend"],["A-rustdoc-search","Area: Rustdoc's search feature"],["A-rustdoc-themes","Area: themes for HTML pages generated by rustdoc"],["A-rustdoc-type-layout","Area: `rustdoc --show-type-layout` (nightly-only)"],["A-rustdoc-ui","Area: rustdoc UI (generated HTML)"],["A-rustfmt","Area: Rustfmt"],["A-sanitizers","Area: Sanitizers for correctness and code quality."],["A-save-analysis","Area: saving results of analyses such as inference and borrowck results to a file."],["A-security","Area: Security related issues (example: adress space layout randomization)"],["A-self-profile","Area: Self-profiling feature of the compiler"],["A-simd","Area: SIMD (Single Instruction Multiple Data)"],["A-slice","Area: [T]"],["A-slice-patterns","Area: slice patterns, https://github.com/rust-lang/rust/issues/23121"],["A-specialization","Area: Trait impl specialization"],["A-spurious","Area: Spurious failures in builds (spuriously == for no apparent reason)"],["A-stability","Area: issues related to #[stable] and #[unstable] attributes themselves."],["A-str","Area: str and String"],["A-suggestion-diagnostics","Area: suggestions generated by the compiler applied by cargo fix"],["A-syntaxext","Area: Syntax extensions"],["A-synthetic-impls","Area: Synthetic impls, used by rustdoc to document auto traits and traits with blanket impls"],["A-target-specs","Area: compile-target specifications"],["A-testsuite","Area: The testsuite used to check the correctness of rustc"],["A-thread-locals","Area: Thread local storage (TLS)"],["A-time","Area: Time"],["A-traits","Area: Trait system"],["A-type-based-search","Area: searching rustdoc pages using type signatures"],["A-typesystem","Area: The type system"],["A-unicode","Area: unicode related"],["A-valtree","Things about value trees or fixed by value trees"],["A-visibility","Area: visibility/privacy modifiers such as `pub`"],["A-zst","Area: Zero-sized types"],["april-1st","Started on the 1st of April"],["AsyncAwait-Polish","Async-await issues that are part of the \"polish\" area"],["AsyncAwait-Triaged","Async-await issues that have been triaged during a working group meeting."],["B-RFC-approved","Approved by a merged RFC but not yet implemented."],["B-RFC-implemented","Approved by a merged RFC and implemented."],["B-unstable","Implemented in the nightly compiler and unstable."],["beta-accepted","Accepted for backporting to the compiler in the beta channel."],["beta-nominated","Nominated for backporting to the compiler in the beta channel."],["C-bug","Category: This is a bug."],["C-cleanup","Category: PRs that clean code up or issues documenting cleanup."],["C-discussion","Category: Discussion or questions that doesn't represent real issues."],["C-enhancement","Category: An issue proposing an enhancement or a PR with one."],["C-feature-accepted","Category: A feature request that has been accepted pending implementation."],["C-feature-request","Category: A feature request, i.e: not implemented / a PR."],["C-future-compatibility","Category: future compatibility lints"],["C-tracking-issue","Category: A tracking issue for an RFC or an unstable feature."],["chalk-integration","Issues blocking \"preliminary chalk integration\" milestone"],["const-generics-bad-diagnostics","An error is correctly emitted, but is confusing, for `min_const_generics`."],["const-generics-blocking","An issue blocking the stabilisation of `min_const_generics`"],["const-generics-fixed-by-const_generics","A bug that has been fixed once `const_generics` is enabled."],["const-generics-fixed-by-min_const_generics","A bug that has been fixed once `min_const_generics` is enabled."],["const-hack","This PR introduced a hack to make things valid in `const fn`."],["D-confusing","Confusing diagnostic error that should be reworked"],["D-crate-version-mismatch","Errors caused be the use of two different crate versions."],["D-edition","Diagnostic error that should account for edition differences"],["D-inconsistent","Inconsistency in formatting, grammar or style between diagnostic messages"],["D-incorrect","A diagnostic that is giving misleading or incorrect information"],["D-invalid-suggestion","A structured suggestion resulting in incorrect code"],["D-newcomer-roadblock","Confusing diagnostic error hard to understand for new users"],["D-papercut","Diagnostic error that needs small tweaks"],["D-terse","A diagnostic that doesn't give enough information about the problem at hand"],["D-verbose","Too much output caused by a single piece of incorrect code"],["disposition-close","This PR / issue is in PFCP or FCP with a disposition to close it."],["disposition-merge","This issue / PR is in PFCP or FCP with a disposition to merge it."],["disposition-postpone",""],["E-easy","Call for participation: Experience needed to fix: Easy / not much"],["E-hard","Call for participation: Experience needed to fix: Hard / a lot"],["E-help-wanted","Call for participation: Help is requested to fix this issue."],["E-medium","Call for participation: Experience needed to fix: Medium / intermediate"],["E-mentor","Call for participation: This issue is currently mentored."],["E-needs-bisection","Call for participation: This issue needs bisection: https://github.com/rust-lang/cargo-bisect-rustc"],["E-needs-mcve","Call for participation: This issue needs a Minimal Complete and Verifiable Example"],["E-needs-mentor","Call for participation: This issue is in need of a mentor."],["E-needs-test","Call for participation: writing correctness tests"],["F-abi_c_cmse_nonsecure_call","`#![feature(abi_c_cmse_nonsecure_call)]`"],["F-adt_const_params","`#![feature(adt_const_params)]`"],["F-arbitrary_self_types","`#![feature(arbitrary_self_types)]`"],["F-asm","`#![feature(asm)]` (not `llvm_asm`)"],["F-associated_type_bounds","`#![feature(associated_type_bounds)]`"],["F-associated_type_defaults","`#![feature(associated_type_defaults)]`"],["F-async_closures","`#![feature(async_closures)]`"],["F-auto_traits","`#![feature(auto_traits)]`"],["F-bindings_after_at","`#![feature(bindings_after_at)]`"],["F-c_unwind","`#![feature(c_unwind)]`"],["F-c_variadic","`#![feature(c_variadic)]`"],["F-cfg_accessible","`#![feature(cfg_accessible)]`"],["F-cfg_version","`#![feature(cfg_version)]`"],["F-cmse_nonsecure_entry","`#![feature(cmse_nonsecure_entry)]`"],["F-coerce_unsized","The `CoerceUnsized` trait"],["F-const_async_blocks","`#![feature(const_async_blocks)]`"],["F-const_extern_fn","`#![feature(const_extern_fn)]`"],["F-const_fn","`#![feature(const_fn)]`"],["F-const_generics","`#![feature(const_generics)]`"],["F-const_generics_defaults","`#![feature(const_generics_defaults)]`"],["F-const_if_match","`#![feature(const_if_match)]`"],["F-const_in_array_repeat_expressions","`#[feature(const_in_array_repeat_expressions)]`"],["F-const_loop","`#![feature(const_loop)]`"],["F-const_mut_refs","`#![feature(const_mut_refs)]`"],["F-const_trait_bound_opt_out","`#![feature(const_trait_bound_opt_out)]`"],["F-const_trait_impl","`#![feature(const_trait_impl)]`"],["F-custom_test_frameworks","`#![feature(custom_test_frameworks)]`"],["F-decl_macro","`#![feature(decl_macro)]`"],["F-destructuring_assignment","`#![feature(destructuring_assignment)]`"],["F-dispatch_from_dyn","`#![feature(dispatch_from_dyn)]`"],["F-doc_cfg","`#![feature(doc_cfg)]`"],["F-dropck_eyepatch","`#![feature(dropck_eyepatch)]`"],["F-exclusive_range_pattern","`#![feature(exclusive_range_pattern)]`"],["F-extended_key_value_attributes","`#![feature(extended_key_value_attributes)]"],["F-extern_types","`#![feature(extern_types)]`"],["F-external_doc","`#![feature(external_doc)]`"],["F-fixed-by-type_alias_impl_trait","The issue can be fixed with type_alias_impl_trait"],["F-format_implicit_args","implicit arguments for format strings (RFC 2795)"],["F-generators","`#![feature(generators)]`"],["F-generic_associated_types","`#![feature(generic_associated_types)]` a.k.a. GATs"],["F-generic_const_exprs","`#![feature(generic_const_exprs)]`"],["F-half_open_range_patterns","`#![feature(half_open_range_patterns)]`"],["F-if_let_guard","`#![feature(if_let_guard)]`"],["F-impl_trait_in_bindings","`#![feature(impl_trait_in_bindings)]`"],["F-inherent_associated_types","`#![feature(inherent_associated_types)]`"],["F-inline_const","Inline constants (aka: const blocks, const expressions, anonymous constants)"],["F-isa_attribute","Related to #[instruction_set] attribute introduced by RFC 2867"],["F-label_break_value","`#![feature(label_break_value)]`"],["F-lazy_normalization_consts","`#![feature(lazy_normalization_consts)]`"],["F-let_chains","`#![feature(let_chains)]`"],["F-let-else","Issues related to let-else statements (RFC 3137)"],["F-macro-metavar-expr","feature(macro_metavar_expr)"],["F-marker_trait_attr","`#![feature(marker_trait_attr)]`"],["F-member_constraints","`#[feature(member_constraints)]`"],["F-min_const_generics","Minimal const generics MVP"],["F-min_type_alias_impl_trait",""],["F-move_ref_pattern","`#![feature(move_ref_pattern)]`"],["F-negative_impls","#![feature(negative_impls)]"],["F-never_type","`#![feature(never_type)]`"],["F-non_ascii_idents","`#![feature(non_ascii_idents)]`"],["F-non_exhaustive","`#![feature(non_exhaustive)]`"],["F-non_exhaustive_omitted_patterns_lint","`#![feature(non_exhaustive_omitted_patterns_lint)]`"],["F-object_safe_for_dispatch","`#![feature(object_safe_for_dispatch)]`"],["F-on_unimplemented","Error messages that can be tackled with `#[rustc_on_unimplemented]`"],["F-or_patterns","`#![feature(or_patterns)]`"],["F-param_attrs","`#![feature(param_attrs)]`"],["F-pub_macro_rules","`#![feature(pub_macro_rules)]`"],["F-raw_dylib","`#![feature(raw_dylib)]`"],["F-raw_ref_op","`#![feature(raw_ref_op)]`"],["F-re_rebalance_coherence","`#![feature(re_rebalance_coherence)]`"],["F-relaxed_struct_unsize","`#![feature(relaxed_struct_unsize)]`"],["F-reserved_prefixes","`#![feature(reserved_prefixes)]`"],["F-rustc_attrs","Internal rustc attributes gated on the `#[rustc_attrs]` feature gate."],["F-simd_ffi","`#![feature(simd_ffi)]`"],["F-slice_patterns","`#![feature(slice_patterns)]`"],["F-specialization","`#![feature(specialization)]`"],["F-target_feature_11","target feature 1.1 RFC"],["F-thread_local","`#![feature(thread_local)]`"],["F-track_caller","`#![feature(track_caller)]`"],["F-trait_alias","`#![feature(trait_alias)]`"],["F-trait_upcasting","`#![feature(trait_upcasting)]`"],["F-try_blocks","`#![feature(try_blocks)]`"],["F-try_trait_v2","Tracking issue for RFC#3058"],["F-type_alias_impl_trait","`#[feature(type_alias_impl_trait)]`"],["F-type_ascription","`#![feature(type_ascription)]`"],["F-type-changing-struct-update",""],["F-unboxed_closures","`#![feature(unboxed_closures)]`"],["F-unsafe-block-in-unsafe-fn","RFC #2585"],["F-unsized_fn_params","`#![feature(unsized_fn_params)]`"],["F-unsized_locals","`#![feature(unsized_locals)]`"],["F-untagged_unions","`#![feature(untagged_unions)]`"],["F-variant_count","#![feature(variant_count)]"],["final-comment-period","In the final comment period and will be merged soon unless new substantive objections are raised."],["finished-final-comment-period","The final comment period is finished for this PR / Issue."],["fixed-by-thir-unsafeck","-Z thir-unsafeck handles this correctly"],["GATs-blocking","Issues using the `generic_associated_types` feature that block stabilization"],["GATs-triaged","Issues using the `generic_associated_types` feature that have been triaged"],["glacier","ICE tracked in rust-lang/glacier"],["hacktoberfest","hacktoberfest projects - https://hacktoberfest.digitalocean.com/"],["I-compilemem","Problems and improvements with respect to memory usage during compilation."],["I-compiler-nominated","Indicates that an issue has been nominated for discussion during a compiler team meeting."],["I-compiletime","Problems and improvements with respect to compile times."],["I-crash","Issue: The compiler crashes (SIGSEGV, SIGABRT, etc). Use I-ICE instead when the compiler panics."],["I-hang","Issue: The compiler never terminates, due to infinite loops, deadlock, livelock, etc."],["I-heavy","Problems and improvements with respect to binary size of generated code."],["I-ICE","Issue: The compiler panicked, giving an Internal Compilation Error (ICE) ❄️"],["I-lang-nominated","Indicates that an issue has been nominated for discussion during a lang team meeting."],["I-libs-api-nominated","Indicates that an issue has been nominated for discussion during a libs-api team meeting."],["I-libs-nominated","Indicates that an issue has been nominated for discussion during a libs team meeting."],["I-monomorphization","Issue: An error at monomorphization time"],["I-needs-decision","Issues in need of decision."],["I-nominated","Indicates that an issue has been nominated for discussion during a team meeting."],["I-prioritize","Indicates that prioritization has been requested for this issue"],["I-slow","Problems and improvements with respect to performance of generated code."],["I-unsound","Issue: A soundness hole (worst kind of bug), see: https://en.wikipedia.org/wiki/Soundness"],["ICEBreaker-Cleanup-Crew","Helping to \"clean up\" bugs with minimal examples and bisections"],["ICEBreaker-LLVM","Bugs identified for the LLVM ICE-breaker group"],["invalid","The issue is invalid and has been raised in error."],["lang-team-202x-edition","Something we may consider if we do another edition"],["Libs-Small","Libs issues that are considered \"small\" or self-contained"],["Libs-Tracked","Libs issues that are tracked on the team's project board."],["link-dead-code","Linkage: using -Clink-dead-code"],["merged-by-bors","This PR was explicitly merged by bors"],["metabug","Issues about issues themselves (\"bugs about bugs\")"],["needs-fcp","This change is insta-stable, so needs a completed FCP to proceed."],["needs-rfc","This change is large or controversial enough that it should have an (e-)RFC accepted before doing it"],["NLL-complete","Working towards the \"valid code works\" goal"],["NLL-diagnostics","Working torwads the \"diagnostic parity\" goal"],["NLL-fixed-by-NLL","Bugs fixed, but only when NLL is enabled."]];