CodeMirror: Go mode
===================

// Prime Sieve in Go. // Taken from the Go specification. // Copyright © The Go Authors. package main import “fmt” // Send the sequence 2, 3, 4, … to channel ‘ch’. func generate(ch chan&lt;- int) { for i := 2; ; i++ { ch &lt;- i // Send ‘i’ to channel ‘ch’ } } // Copy the values from channel ‘src’ to channel ‘dst’, // removing those divisible by ‘prime’. func filter(src &lt;-chan int, dst chan&lt;- int, prime int) { for i := range src { // Loop over values received from ‘src’. if i%prime != 0 { dst &lt;- i // Send ‘i’ to channel ‘dst’. } } } // The prime sieve: Daisy-chain filter processes together. func sieve() { ch := make(chan int) // Create a new channel. go generate(ch) // Start generate() as a subprocess. for { prime := &lt;-ch fmt.Print(prime, “\\n”) ch1 := make(chan int) go filter(ch, ch1, prime) ch = ch1 } } func main() { sieve() }

**MIME type:** `text/x-go`
