import RobotDirectives = require('robot-directives');

// examples from source of https://github.com/stevenvachon/broken-link-checker#readme

const robots = new RobotDirectives({ userAgent: 'test' });

const node = {
  name: "robots",
  content: "User-agent: *\nDisallow: / "
};

if (node.name === "robots" || RobotDirectives.isBot(node.name)) {
  robots.meta(node.name, node.content);
}

if (robots.oneIs([ RobotDirectives.NOFOLLOW, RobotDirectives.NOINDEX ])) {
  "BLC_ROBOTS";
}

if (robots.is(RobotDirectives.NOIMAGEINDEX)) {
  "BLC_ROBOTS";
}

const response = {
  headers: {
    'x-robots-tag': 'test'
  }
};
robots.header(response.headers['x-robots-tag']);
