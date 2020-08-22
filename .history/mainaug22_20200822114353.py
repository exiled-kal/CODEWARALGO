times = [("year", 365 * 24 * 60 * 60),
         ("day", 24 * 60 * 60),
         ("hour", 60 * 60),
         ("minute", 60),
         ("second", 1)]


def format_duration(seconds):

    if not seconds:
        return "now"

    chunks = []
    for name, secs in times:
        qty = seconds // secs
        if qty:
            if qty > 1:
                name += "s"
            newformat.append(str(qty) + " " + name)

        seconds = seconds % secs

    return ', '.join(newformat[:-1]) + ' and ' + newformat[-1] if len(newformat) > 1 else newformat[0]
