<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output
    method="html" encoding="utf-8" indent="yes"
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
  <xsl:template match="/WebApp">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <xsl:if test="attribute::title">
          <title><xsl:value-of select="@title"/></title>
        </xsl:if>
        <xsl:if test="attribute::icon">
          <link rel="icon" href="{@icon}" type="image/png"/>
        </xsl:if>
        <meta name="viewport" content="width=device-width"/>
        <link rel="stylesheet" type="text/css" media="all" href="view/style/style.css"/>
      </head>
      <body>
        <xsl:apply-templates select="/WebApp/NavBar"/>
        <xsl:apply-templates select="*|node()"/>
        <script><![CDATA[
          document.querySelectorAll('label.input > *').forEach(input => {
            input.addEventListener('input', () => {
              if(input.value){
                input.parentElement.classList.add('has_value');
              } else {
                input.parentElement.classList.remove('has_value');
              }
            });
          });
        ]]></script>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="/WebApp/NavBar">
    <xsl:text>Header</xsl:text>
  </xsl:template>
  <xsl:template match="Separate">
    <xsl:variable name="tagName">
      <xsl:choose>
        <xsl:when test="attribute::type = 'horizontal'">span</xsl:when>
        <xsl:otherwise>div</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="size">
      <xsl:choose>
        <xsl:when test="attribute::size">
          <xsl:value-of select="@size"/>
        </xsl:when>
        <xsl:otherwise>1px</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:element name="{$tagName}">
      <xsl:attribute name="style">
        <xsl:choose>
          <xsl:when test="attribute::type = 'horizontal'">
            <xsl:text>display:inline-block;width:</xsl:text>
            <xsl:value-of select="$size"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:text>height:</xsl:text>
            <xsl:value-of select="$size"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>
    </xsl:element>
  </xsl:template>
  <xsl:template match="TextField[@type = 'box' or @type = 'text' or @type = 'password' or @type = 'email']">
    <xsl:element name="label">
      <xsl:attribute name="class">
        <xsl:text>input</xsl:text>
        <xsl:if test="string-length(.) != 0">
          <xsl:text> has_value</xsl:text>
        </xsl:if>
      </xsl:attribute>
      <xsl:if test="@hint">
        <xsl:attribute name="title">
          <xsl:value-of select="@hint"/>
        </xsl:attribute>
      </xsl:if>
      <xsl:call-template name="TextField"/>
    </xsl:element>
  </xsl:template>
  <xsl:template match="Text|Link|TextField" name="TextField">
    <xsl:variable name="tagName">
      <xsl:choose>
        <xsl:when test="self::Link">a</xsl:when>
        <xsl:when test="self::TextField and @type = 'box'">textarea</xsl:when>
        <xsl:when test="self::TextField">input</xsl:when>
        <xsl:otherwise>span</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:element name="{$tagName}">
      <xsl:if test="self::Link">
        <xsl:if test="@url">
          <xsl:attribute name="href">
            <xsl:value-of select="@url"/>
          </xsl:attribute>
        </xsl:if>
        <xsl:if test="@target">
          <xsl:attribute name="target">
            <xsl:value-of select="@target"/>
          </xsl:attribute>
        </xsl:if>
      </xsl:if>
      <xsl:if test="self::TextField">
        <xsl:if test="@type and not(@type = 'box')">
          <xsl:attribute name="type">
            <xsl:value-of select="@type"/>
          </xsl:attribute>
        </xsl:if>
        <xsl:if test="@name">
          <xsl:attribute name="name">
            <xsl:value-of select="@name"/>
          </xsl:attribute>
        </xsl:if>
        <xsl:if test=". and not(@type = 'box')">
          <xsl:attribute name="value">
            <xsl:value-of select="normalize-space(.)"/>
          </xsl:attribute>
        </xsl:if>
      </xsl:if>
      <xsl:attribute name="style">
        <xsl:if test="contains(concat(' ', @format, ' '), ' bold ')">
          <xsl:text>font-weight:bolder;</xsl:text>
        </xsl:if>
        <xsl:if test="contains(concat(' ', @format, ' '), ' italic ')">
          <xsl:text>font-style:italic;</xsl:text>
        </xsl:if>
        <xsl:if test="@decoration">
          <xsl:text>text-decoration-skip-ink:none;text-decoration-line:</xsl:text>
          <xsl:value-of select="@decoration"/>
          <xsl:text>;</xsl:text>
          <xsl:if test="@decoration-color">
            <xsl:text>text-decoration-color:</xsl:text>
            <xsl:value-of select="@decoration-color"/>
            <xsl:text>;</xsl:text>
          </xsl:if>
          <xsl:if test="@decoration-style">
            <xsl:text>text-decoration-style:</xsl:text>
            <xsl:value-of select="@decoration-style"/>
            <xsl:text>;</xsl:text>
          </xsl:if>
        </xsl:if>
        <xsl:if test="@color">
          <xsl:text>color:</xsl:text>
          <xsl:value-of select="@color"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
        <xsl:if test="@bgcolor">
          <xsl:text>background-color:</xsl:text>
          <xsl:value-of select="@bgcolor"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
        <xsl:if test="@font">
          <xsl:text>font-family:</xsl:text>
          <xsl:value-of select="@font"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
        <xsl:if test="@border">
          <xsl:text>border-style:</xsl:text>
          <xsl:value-of select="@border"/>
          <xsl:text>;</xsl:text>
          <xsl:if test="@border-size">
            <xsl:text>border-width:</xsl:text>
            <xsl:value-of select="@border-size"/>
            <xsl:text>;</xsl:text>
          </xsl:if>
          <xsl:if test="@border-color">
            <xsl:text>border-color:</xsl:text>
            <xsl:value-of select="@border-color"/>
            <xsl:text>;</xsl:text>
          </xsl:if>
        </xsl:if>
        <xsl:if test="@border-radius">
          <xsl:text>border-radius:</xsl:text>
          <xsl:value-of select="@border-radius"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
        <xsl:if test="@font-size">
          <xsl:text>font-size:</xsl:text>
          <xsl:value-of select="@font-size"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
        <xsl:if test="@padding">
          <xsl:text>padding:</xsl:text>
          <xsl:value-of select="@padding"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
        <xsl:if test="@cursor">
          <xsl:text>cursor:</xsl:text>
          <xsl:value-of select="@cursor"/>
          <xsl:text>;</xsl:text>
        </xsl:if>
      </xsl:attribute>
      <xsl:if test="not(self::TextField and not(@type = 'box'))">
        <xsl:value-of select="normalize-space(.)"/>
      </xsl:if>
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>
