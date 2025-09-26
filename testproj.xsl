<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output
    method="xml"
    doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
	encoding="utf-8" indent="yes" omit-xml-declaration="yes"/>
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="html">
	<html xmlns="http://www.w3.org/1999/xhtml">
	  <head>
	    <title>Page</title>
	  </head>
	  <body>
	    <xsl:copy>
	      <xsl:apply-templates select="@*|node()"/>
	    </xsl:copy>
	  </body>
    </html>
  </xsl:template>
  <xsl:template match="bold">
    <span style="font-weight: bolder">
	  <xsl:copy>
		<xsl:apply-templates select="@*|node()"/>
	  </xsl:copy>
    </span>
  </xsl:template>
</xsl:stylesheet>
