impl Solution1 {
    pub fn subdomain_visits(cpdomains: Vec<String>) -> Vec<String> {
        use std::collections::HashMap;

        let mut cpdomains_map = HashMap::new();

        for cpdomains in cpdomains.iter() {
            let mut splited_iter = cpdomains.split_whitespace();
            let rep = splited_iter.next().unwrap().parse::<u32>().unwrap();
            let splited_domain = splited_iter.next().unwrap().split('.').rev();
            let mut combines = String::new();

            for subdomain in splited_domain {
                if !combines.is_empty() {
                    combines = format!("{}.{}", subdomain, combines);
                } else {
                    combines.push_str(subdomain);
                }

                cpdomains_map
                    .entry(combines.clone())
                    .and_modify(|val| *val += rep)
                    .or_insert(rep);
            }
        }

        let mut result = Vec::new();

        for (key, val) in cpdomains_map {
            result.push(format!("{} {}", val, key));
        }

        result
    }
}

impl Solution2 {
    pub fn subdomain_visits(cpdomains: Vec<String>) -> Vec<String> {
        use std::collections::HashMap;

        let mut map: HashMap<String, i32> = HashMap::new();

        for item in cpdomains.iter() {
            let parts: Vec<&str> = item.split(' ').collect();
            let count: i32 = parts[0].parse().expect("Error parsing count");
            let domain = parts[1];

            let subdomains: Vec<&str> = domain.split('.').collect();
            for i in 0..subdomains.len() {
                let key = subdomains[i..].join(".");
                *map.entry(key).or_insert(0) += count;
            }
        }

        let mut answer = Vec::new();

        for (key, value) in map {
            answer.push(format!("{} {}", value, key));
        }

        answer
    }
}
