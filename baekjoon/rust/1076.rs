use std::collections::HashMap;
use std::io::{read_to_string, stdin};

struct ResistorColor {
    value: u64,
    multiple: u64,
}

fn main() {
    let buf = read_to_string(stdin()).unwrap();

    let colors: Vec<&str> = buf.split_whitespace().collect();

    let color_map = HashMap::from([
        (
            "black",
            ResistorColor {
                value: 0,
                multiple: 1,
            },
        ),
        (
            "brown",
            ResistorColor {
                value: 1,
                multiple: 10,
            },
        ),
        (
            "red",
            ResistorColor {
                value: 2,
                multiple: 100,
            },
        ),
        (
            "orange",
            ResistorColor {
                value: 3,
                multiple: 1000,
            },
        ),
        (
            "yellow",
            ResistorColor {
                value: 4,
                multiple: 10000,
            },
        ),
        (
            "green",
            ResistorColor {
                value: 5,
                multiple: 100000,
            },
        ),
        (
            "blue",
            ResistorColor {
                value: 6,
                multiple: 1000000,
            },
        ),
        (
            "violet",
            ResistorColor {
                value: 7,
                multiple: 10000000,
            },
        ),
        (
            "grey",
            ResistorColor {
                value: 8,
                multiple: 100000000,
            },
        ),
        (
            "white",
            ResistorColor {
                value: 9,
                multiple: 1000000000,
            },
        ),
    ]);

    let color1 = color_map.get(colors[0]).unwrap();
    let color2 = color_map.get(colors[1]).unwrap();
    let color3 = color_map.get(colors[2]).unwrap();

    let result = (color1.value * 10 + color2.value) * color3.multiple;

    print!("{}", result);
}
