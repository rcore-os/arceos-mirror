(function() {var type_impls = {
"spinlock":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#212-216\">source</a><a href=\"#impl-Debug-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, G: <a class=\"trait\" href=\"kernel_guard/trait.BaseGuard.html\" title=\"trait kernel_guard::BaseGuard\">BaseGuard</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#213-215\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spinlock::SpinNoPreemptGuard","spinlock::SpinNoIrqGuard","spinlock::SpinRawGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#195-202\">source</a><a href=\"#impl-Deref-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, G: <a class=\"trait\" href=\"kernel_guard/trait.BaseGuard.html\" title=\"trait kernel_guard::BaseGuard\">BaseGuard</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = T</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#198-201\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;T</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","spinlock::SpinNoPreemptGuard","spinlock::SpinNoIrqGuard","spinlock::SpinRawGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#204-210\">source</a><a href=\"#impl-DerefMut-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, G: <a class=\"trait\" href=\"kernel_guard/trait.BaseGuard.html\" title=\"trait kernel_guard::BaseGuard\">BaseGuard</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#206-209\">source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","spinlock::SpinNoPreemptGuard","spinlock::SpinNoIrqGuard","spinlock::SpinRawGuard"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#218-227\">source</a><a href=\"#impl-Drop-for-BaseSpinLockGuard%3C'a,+G,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, G: <a class=\"trait\" href=\"kernel_guard/trait.BaseGuard.html\" title=\"trait kernel_guard::BaseGuard\">BaseGuard</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spinlock/base.rs.html#222-226\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>The dropping of the <a href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\"><code>BaseSpinLockGuard</code></a> will release the lock it was\ncreated from.</p>\n</div></details></div></details>","Drop","spinlock::SpinNoPreemptGuard","spinlock::SpinNoIrqGuard","spinlock::SpinRawGuard"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()