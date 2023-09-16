/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

*/

const filesize = function (bytes) {

    if(bytes >= 1000000000000) {
        return `${parseFloat((bytes / 1000000000000).toFixed(2))}TB`
    }
    else if (bytes >= 1000000000) {
        return `${parseFloat((bytes / 1000000000).toFixed(2))}GB`
    }
    else if (bytes >= 1000000) {
        return `${parseFloat((bytes / 1000000).toFixed(2))}MB`
    }
    else if (bytes >= 1000) {
        return `${parseFloat((bytes / 1000).toFixed(2))}KB`
    }
    else if (bytes >= 1) {
        return `${bytes}B`
    }
};

console.log(filesize(1));
console.log(filesize(1000));
console.log(filesize(1000000));
console.log(filesize(1500000));
console.log(filesize(1250000000));
console.log(filesize(9000000000000));