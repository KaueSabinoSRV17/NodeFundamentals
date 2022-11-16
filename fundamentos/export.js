const onlyFlags = item => item.startsWith('--')
const onlyValues = item => !onlyFlags(item)
const onlyUserArguments = argument => !argument.startsWith('/')

function organizeProcessArguments() {
    const userArguments = process.argv.filter(onlyUserArguments)

    const flags = userArguments.filter(onlyFlags)
    const values = userArguments.filter(onlyValues)

    const flagAndValueMap = flags
        .reduce((flagAndValueMap, flag, index) => {
            flag = flag.replace('--', '')
            flagAndValueMap[flag] = values[index]
            return flagAndValueMap
        }, {})

    return {flagAndValueMap, flags}
}

function getFlagValue(flag) {
    const {flagAndValueMap, flags} = organizeProcessArguments()
    const flagsWithoutSlashes = flags.map(flag => flag.replace('--', ''))
    const flagIsValid = flagsWithoutSlashes.some(flagName => flag === flagName)

    if (!flagIsValid) throw new Error('This Flag is not Present in the Process!')

    const value = flagAndValueMap[flag]

    return value

}

module.exports = getFlagValue